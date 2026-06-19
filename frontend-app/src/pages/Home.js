import { useState, useEffect } from "react";
import FoodList from "../components/FoodList";
import Navbar from "../components/Navbar";

function Home() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <FoodList cart={cart} setCart={setCart} />
    </div>
  );
}

export default Home;