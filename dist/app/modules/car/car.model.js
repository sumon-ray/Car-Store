"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const car_interface_1 = require("./car.interface");
const carSchema = new mongoose_1.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 1,
    },
    category: {
        type: String,
        enum: Object.values(car_interface_1.carCategory),
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
});
// Pre-save hook to set inStock based on quantity
carSchema.pre("save", function (next) {
    this.inStock = this.quantity > 0;
    next();
});
// Mongoose Model for Car
const CarModel = (0, mongoose_1.model)("Car", carSchema);
exports.default = CarModel;
