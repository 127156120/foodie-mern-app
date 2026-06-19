import { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [foods, setFoods] = useState([]);

  const [editId, setEditId] = useState(null);
const [editPrice, setEditPrice] = useState("");

  const fetchFoods = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/food"
      );

      setFoods(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const addFood = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/food/add",
        {
          name,
          price,
          image,
        }
      );

      alert("Food Added Successfully ✅");

      setName("");
      setPrice("");
      setImage("");

      fetchFoods();
    } catch (error) {
      console.log(error);
      alert("Failed to Add Food");
    }
  };

  const deleteFood = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/food/${id}`
      );

      alert("Food Deleted Successfully 🗑️");

      fetchFoods();
    } catch (error) {
      console.log(error);
      alert("Failed to Delete Food");
    }
  };

  const updateFood = async (id) => {
  try {
    await axios.put(
      `http://localhost:5000/api/food/${id}`,
      {
        price: editPrice,
      }
    );

    alert("Food Updated Successfully ✅");

    setEditId(null);
    setEditPrice("");

    fetchFoods();
  } catch (error) {
    console.log(error);
    alert("Failed to Update Food");
  }
};

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Admin Panel</h2>

      <input
        placeholder="Food Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <br /><br />

      <button onClick={addFood}>
        Add Food
      </button>

      <hr />

      <h2>All Foods</h2>

      {foods.map((food) => (
        <div
          key={food._id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <h3>{food.name}</h3>

{editId === food._id ? (
  <>
    <input
      value={editPrice}
      onChange={(e) =>
        setEditPrice(e.target.value)
      }
    />

    <button
      onClick={() =>
        updateFood(food._id)
      }
    >
      Save
    </button>
  </>
) : (
  <>
    <p>₹{food.price}</p>

    <button
      onClick={() => {
        setEditId(food._id);
        setEditPrice(food.price);
      }}
    >
      Edit
    </button>

    <button
      onClick={() =>
        deleteFood(food._id)
      }
      style={{ marginLeft: "10px" }}
    >
      Delete
    </button>
  </>
)}
        </div>
      ))}
    </div>
  );
}

export default Admin;