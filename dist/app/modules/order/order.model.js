"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    car: { type: mongoose_1.Schema.Types.ObjectId, ref: "Car", required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 0 },
}, { timestamps: true });
const OrderModel = (0, mongoose_1.model)("Order", orderSchema);
exports.default = OrderModel;
