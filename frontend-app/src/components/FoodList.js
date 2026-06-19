import { useEffect, useState } from "react";
import axios from "axios";

function FoodList({ cart, setCart }) {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/food")
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addToCart = (food) => {
    const existingItem = cart.find(
      (item) => item._id === food._id
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item._id === food._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        { ...food, quantity: 1 }
      ]);
    }
  };
   

  return (
  <div>
    <h2 style={{ textAlign: "center" }}>Food Menu</h2>

    <div className="food-container">
      {foods.map((food) => (
        <div className="food-card" key={food._id}>
          <img
            src={food.image}
            alt={food.name}
            className="food-image"
          />

          <h3>{food.name}</h3>
          <p>₹{food.price}</p>

          <button onClick={() => addToCart(food)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
);
}

export default FoodList;