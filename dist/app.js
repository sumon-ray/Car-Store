"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import { studentRoute } from "./app/modules/student/student.route";
const car_route_1 = require("./app/modules/car/car.route");
const order_route_1 = require("./app/modules/order/order.route");
const app = (0, express_1.default)();
// const port = 3000;
// parser  // middleware --> standard to say
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/cars", car_route_1.useRouter);
// order api
app.use("/api/orders", order_route_1.orderRouter);
const getAController = (req, res) => {
    res.send("hello world");
};
app.get("/", getAController);
exports.default = app;
