import mongoose from "mongoose";
import dotenv from "dotenv";
import Food from "./models/Food.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    await Food.insertMany([
  {
    name: "Pizza",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    name: "Burger",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    name: "Pasta",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
  },
]);

    console.log("Food Data Added ✅");
    process.exit();
  })
  .catch((err) => console.log(err));