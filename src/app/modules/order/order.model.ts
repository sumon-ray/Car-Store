import { model, Schema } from "mongoose";
import { Order } from "./order.interface";

const orderSchema = new Schema<Order>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: function (v: string) {
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
          return emailRegex.test(v); 
        },
        message: "Please provide a valid email address",
      },
    },
    car: { type: Schema.Types.ObjectId, ref: "Car", required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

const OrderModel = model<Order>("Order", orderSchema);

export default OrderModel;

