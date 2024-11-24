import express from "express";
import { orderController } from "./order.controller"; // Import the controller

const router = express.Router();

// Post route to create an order
router.post("/", orderController.createOrderController);
router.get("/", orderController.getAllOrders);
router.get("/revenue", orderController.calculateRevenue);

export const orderRouter = router;
