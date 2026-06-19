import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userEmail: String,

  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],

  totalPrice: Number,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;