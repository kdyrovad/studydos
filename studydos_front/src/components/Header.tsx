import React from "react";
import { FaMoon, FaBell, FaUserCircle } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <div className="header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", background: "#f4f4f4" }}>
      <h2>Welcome back, Aiym!</h2>
      <div style={{ display: "flex", gap: "15px", fontSize: "20px" }}>
        <FaMoon style={{ cursor: "pointer" }} />
        <FaBell style={{ cursor: "pointer" }} />
        <FaUserCircle style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Header;