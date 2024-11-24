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
exports.carController = void 0;
const car_service_1 = require("./car.service");
// create Car Data
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const result = yield car_service_1.carService.createCarDB(payload);
        res.status(200).json({
            status: true,
            message: "cars data created succcessfully",
            data: result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: "car data created fail",
            error,
        });
    }
});
// Get All Cars
const getAllCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_service_1.carService.getAllCars();
        res.status(200).json({
            status: true,
            message: "All cars retrieved succcessfully",
            data: result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: "car data created fail",
            error,
        });
    }
});
// Get Specific Car with Id
const getSpecificCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId } = req.params;
        const result = yield car_service_1.carService.getSpecificCar(carId);
        res.status(200).json({
            status: true,
            message: "specific car retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: "car can't be found",
            error,
        });
    }
});
// Update Car
const updateCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        //   console.log(data)
        const { carId } = req.params;
        // console.log(carId)
        const result = yield car_service_1.carService.updateCar(carId, data);
        res.status(200).json({
            status: true,
            message: "Car updated successfully",
            data: result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: "failed to update car",
            error,
        });
    }
});
// delete Car
const deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId } = req.params;
        const result = yield car_service_1.carService.deleteCar(carId);
        res.status(200).json({
            status: true,
            message: "Delete Car successfully",
            data: result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: "failed to delete car",
            error,
        });
    }
});
exports.carController = {
    createCar,
    getAllCars,
    getSpecificCar,
    updateCar,
    deleteCar,
};
