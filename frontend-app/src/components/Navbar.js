function Navbar({ cartCount }) {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div
      style={{
        background: "green",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Foodie App 🍕</h1>

      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <button onClick={() => (window.location.href = "/home")}>
          Home
        </button>

        <button onClick={() => (window.location.href = "/orders")}>
          Orders
        </button>

        <button onClick={() => (window.location.href = "/admin")}>
          Admin
        </button>

        <h3>🛒 Cart ({cartCount})</h3>

        <button onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;