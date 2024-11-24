"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = exports.createOrder = void 0;
const car_model_1 = __importDefault(require("../car/car.model"));
const order_model_1 = __importDefault(require("./order.model"));
const createOrder = (email, carId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    const car = yield car_model_1.default.findById(carId);
    if (!car) {
        throw new Error("Car not found");
    }
    if (car.quantity < quantity) {
        throw new Error("Insufficient stock");
    }
    const totalPrice = car.price * quantity;
    // Create the order
    const order = yield order_model_1.default.create({
        email,
        car: carId,
        quantity,
        totalPrice,
    });
    // Update car stock and availability
    car.quantity -= quantity;
    car.inStock = car.quantity > 0;
    yield car.save();
    return order;
});
exports.createOrder = createOrder;
// Get All Orders
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.find();
    return result;
});
// Calculate total revenue from all orders
const calculateRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: "$totalPrice" }, // Sum up the totalPrice from all orders
            },
        },
    ]);
    const totalRevenue = result.length > 0 ? result[0].totalRevenue : 0;
    return {
        message: "Revenue calculated successfully",
        status: true,
        data: {
            totalRevenue,
        },
    };
});
exports.orderService = {
    createOrder: exports.createOrder,
    getAllOrders,
    calculateRevenue,
};
