import CarModel from "../car/car.model";
import { Order } from "./order.interface";
import OrderModel from "./order.model";

export const createOrder = async (
  email: string,
  carId: string,
  quantity: number,
): Promise<Order> => {
  const car = await CarModel.findById(carId);

  if (!car) {
    throw new Error("Car not found");
  }

  if (car.quantity < quantity) {
    throw new Error("Insufficient stock");
  }

  const totalPrice = car.price * quantity;

  // Create the order
  const order = await OrderModel.create({
    email,
    car: carId,
    quantity,
    totalPrice,
  });

  // Update car stock and availability
  car.quantity -= quantity;
  car.inStock = car.quantity > 0;
  await car.save();

  return order;
};

// Get All Orders
const getAllOrders = async () => {
  const result = await OrderModel.find();
  return result;
};

// Calculate total revenue from all orders
const calculateRevenue = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalPrice" },
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
};

export const orderService = {
  createOrder,
  getAllOrders,
  calculateRevenue,
};
