import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Orders</h2>

      {orders.map((order) => (
        <div
          key={order._id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
          }}
        >
          <p>Email: {order.userEmail}</p>
          <p>Total Price: ₹{order.totalPrice}</p>
          <p>
            Date: {new Date(order.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Orders;