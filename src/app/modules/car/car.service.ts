import { Car } from "./car.interface";
import CarModel from "./car.model";

const createCarDB = async (car: Car): Promise<Car> => {
  const result = await CarModel.create(car);
  return result;
};

// Get All Cars
const getAllCars = async () => {
  const result = await CarModel.find();
  return result;
};

// Get Specific Car
const getSpecificCar = async (carId: string) => {
  const result = await CarModel.findOne({ _id: carId });
  return result;
};

// Update Car
const updateCar = async (carId: string, data: Car) => {
  try {
    await CarModel.findByIdAndUpdate(carId, data, {
      new: true,
      runValidators: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// Delete Car
const deleteCar = async (carId: string) => {
  const result = await CarModel.findByIdAndDelete(carId);
  return result;
};

export const carService = {
  createCarDB,
  getAllCars,
  getSpecificCar,
  updateCar,
  deleteCar,
};
