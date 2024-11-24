import { model, Schema } from "mongoose";
import { Car, carCategory } from "./car.interface";

const carSchema = new Schema<Car>({
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
    enum: Object.values(carCategory),
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

const CarModel = model<Car>("Car", carSchema);

export default CarModel;
