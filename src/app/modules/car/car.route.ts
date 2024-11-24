import express from "express";
import { carController } from "./car.controller";

const router = express.Router();
router.post("/", carController.createCar);
router.get("/", carController.getAllCars);
router.get("/:carId", carController.getSpecificCar);
router.put("/:carId", carController.updateCar);
router.delete("/:carId", carController.deleteCar);

export const useRouter = router;
