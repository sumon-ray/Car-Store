"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller"); // Import the controller
const router = express_1.default.Router();
// Post route to create an order
router.post("/", order_controller_1.orderController.createOrderController);
router.get("/", order_controller_1.orderController.getAllOrders);
router.get("/revenue", order_controller_1.orderController.calculateRevenue);
// Get route to retrieve all orders
// router.get("/", orderController.getAllOrders);
// Get route to calculate total revenue
// router.get("/revenue", orderController.calculateRevenue);
exports.orderRouter = router;
