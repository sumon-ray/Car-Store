"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouter = void 0;
const express_1 = __importDefault(require("express"));
const car_controller_1 = require("./car.controller");
const router = express_1.default.Router();
router.post("/", car_controller_1.carController.createCar);
router.get("/", car_controller_1.carController.getAllCars);
router.get("/:carId", car_controller_1.carController.getSpecificCar);
router.put("/:carId", car_controller_1.carController.updateCar);
router.delete("/:carId", car_controller_1.carController.deleteCar);
exports.useRouter = router;
