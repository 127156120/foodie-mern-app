import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// Save Order
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);

    await order.save();

    res.json({
      message: "Order Saved Successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Get Orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

export default router;