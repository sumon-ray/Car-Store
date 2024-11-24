import { NextFunction, Request, Response } from "express";
import { carService } from "./car.service";

// create Car Data
const createCar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const result = await carService.createCarDB(payload);

    res.status(200).json({
      message: "Car created successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Cars
const getAllCars = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await carService.getAllCars();

    res.status(200).json({
      message: "Cars retrieved succcessfully",
      status: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get Specific Car with Id
const getSpecificCar = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { carId } = req.params;
    const result = await carService.getSpecificCar(carId);
    res.status(200).json({
      message: "Car retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Update Car
const updateCar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const { carId } = req.params;
    const result = await carService.updateCar(carId, data);
    res.status(200).json({
      message: "Car updated successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// delete Car
const deleteCar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { carId } = req.params;
    await carService.deleteCar(carId);
    res.status(200).json({
      message: "Car Deleted successfully",
      status: true,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

// Error Handler Middleware
interface ErrorDetails {
  name: string;
  message: string;
  errors?: Record<string, any>;
}

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let message = err.message || "An internal error occurred";
  let statusCode = err.status || 500;
  let errorDetails: ErrorDetails = { name: err.name, message: err.message };

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    message = "Validation failed";
    errorDetails = {
      name: err.name,
      message: err.message,
      errors: err.errors,
    };
    statusCode = 400;
  }

  if (err.name === "CastError") {
    message = "Invalid ID format";
    errorDetails = {
      name: err.name,
      message: err.message,
    };
    statusCode = 400;
  }

  const cleanStack = err.stack
    ? err.stack
        .split("\n")
        .filter((line: string) => !line.includes("node_modules"))
        .join("\n")
    : undefined;

  // Format the response with stack trace (only in development mode)
  res.status(statusCode).json({
    success: false,
    message,
    error: errorDetails,
    stack: process.env.NODE_ENV === "production" ? undefined : cleanStack,
  });
};

export const carController = {
  createCar,
  getAllCars,
  getSpecificCar,
  updateCar,
  deleteCar,
};
