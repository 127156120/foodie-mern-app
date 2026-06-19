import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import OrdersPage from "./pages/OrdersPage";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            token ? (
              <Navigate to="/home" />
            ) : (
              <LoginPage />
            )
          }
        />

        <Route
          path="/home"
          element={
            token ? (
              <Home />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/admin"
          element={
            token ? (
              <AdminPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/orders"
          element={
            token ? (
              <OrdersPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;