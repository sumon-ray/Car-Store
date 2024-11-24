import { Request, Response } from "express";
import { carService } from "./car.service";

// create Car Data
const createCar = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await carService.createCarDB(payload);

    res.status(200).json({
      status: true,
      message: "cars data created succcessfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "car data created fail",
      error,
    });
  }
};

// Get All Cars
const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await carService.getAllCars();

    res.status(200).json({
      status: true,
      message: "All cars retrieved succcessfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "car data created fail",
      error,
    });
  }
};

// Get Specific Car with Id
const getSpecificCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const result = await carService.getSpecificCar(carId);
    res.status(200).json({
      status: true,
      message: "specific car retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "car can't be found",
      error,
    });
  }
};

// Update Car
const updateCar = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    //   console.log(data)
    const { carId } = req.params;
    // console.log(carId)

    const result = await carService.updateCar(carId, data);
    res.status(200).json({
      status: true,
      message: "Car updated successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "failed to update car",
      error,
    });
  }
};

// delete Car
const deleteCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const result = await carService.deleteCar(carId);
    res.status(200).json({
      status: true,
      message: "Delete Car successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "failed to delete car",
      error,
    });
  }
};
export const carController = {
  createCar,
  getAllCars,
  getSpecificCar,
  updateCar,
  deleteCar,
};
