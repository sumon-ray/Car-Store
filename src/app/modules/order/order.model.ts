import { model, Schema } from "mongoose";
import { Order } from "./order.interface";

const orderSchema = new Schema<Order>(
  {
    email: { type: String, required: true },
    car: { type: Schema.Types.ObjectId, ref: "Car", required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

const OrderModel = model<Order>("Order", orderSchema);

export default OrderModel;
