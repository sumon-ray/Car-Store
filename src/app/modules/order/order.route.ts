import express from "express";
import { orderController } from "./order.controller"; // Import the controller

const router = express.Router();

// Post route to create an order
router.post("/", orderController.createOrderController);
router.get("/", orderController.getAllOrders);
router.get("/revenue", orderController.calculateRevenue);

// Get route to retrieve all orders
// router.get("/", orderController.getAllOrders);

// Get route to calculate total revenue
// router.get("/revenue", orderController.calculateRevenue);

export const orderRouter = router;
