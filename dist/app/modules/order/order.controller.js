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
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = exports.createOrderController = void 0;
const order_service_1 = require("./order.service");
const createOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, car, quantity } = req.body;
    try {
        const order = yield order_service_1.orderService.createOrder(email, car, quantity);
        res.status(201).send({
            message: "Order created successfully",
            status: true,
            data: order,
        });
    }
    catch (error) {
        res.status(400).send({
            message: "Failed to create order",
            status: false,
            error,
        });
    }
});
exports.createOrderController = createOrderController;
// Get All Orders
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.orderService.getAllOrders();
        res.status(200).json({
            status: true,
            message: "retrive all orders successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            message: "Failed to get all orders",
            status: false,
            error,
        });
    }
});
// Calculate total revenue from all orders
const calculateRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.orderService.calculateRevenue();
        res.status(200).json({
            status: true,
            message: "revinue calculated from all orders",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            message: "Failed to get all orders",
            status: false,
            error,
        });
    }
});
exports.orderController = {
    createOrderController: exports.createOrderController,
    getAllOrders,
    calculateRevenue,
};
