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
exports.carService = void 0;
const car_model_1 = __importDefault(require("./car.model"));
const createCarDB = (car) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.default.create(car);
    return result;
});
// Get All Cars
const getAllCars = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.default.find();
    return result;
});
// Get Specific Car
const getSpecificCar = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.default.findOne({ _id: carId });
    return result;
});
// Update Car
const updateCar = (carId, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield car_model_1.default.findByIdAndUpdate(carId, data, {
            new: true,
            runValidators: true,
        });
    }
    catch (error) {
        console.log(error);
    }
});
// Delete Car
const deleteCar = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.default.findByIdAndDelete(carId);
    return result;
});
exports.carService = {
    createCarDB,
    getAllCars,
    getSpecificCar,
    updateCar,
    deleteCar,
};
