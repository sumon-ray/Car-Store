import { Request, Response } from "express";
import { orderService } from "./order.service";

export const createOrderController = async (req: Request, res: Response) => {
  const { email, car, quantity } = req.body;

  try {
    const result = await orderService.createOrder(email, car, quantity);

    res.status(201).send({
      message: "Order created successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      message: "Failed to create order",
      status: false,
      error,
    });
  }
};

// Get All Orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getAllOrders();
    res.status(200).json({
      message: "Retrived all orders successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      message: "Failed to get all orders",
      status: false,
      error,
    });
  }
};

// Calculate total revenue from all orders
const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.calculateRevenue();

    res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: { result },
    });
  } catch (error) {
    res.status(400).send({
      message: "Failed to calculated Revenue",
      status: false,
      error,
    });
  }
};

export const orderController = {
  createOrderController,
  getAllOrders,
  calculateRevenue,
};
