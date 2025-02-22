import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar" style={{ width: "60px", background: "#282c34", padding: "10px", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Link to="/" style={{ margin: "20px 0", color: "white", fontSize: "24px" }}><FaHome /></Link>
      <Link to="/profile" style={{ margin: "20px 0", color: "white", fontSize: "24px" }}><FaUser /></Link>
      <Link to="/settings" style={{ margin: "20px 0", color: "white", fontSize: "24px" }}><FaCog /></Link>
    </div>
  );
};

export default Sidebar;