import React from "react";
import { FaMoon, FaBell, FaUserCircle } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <div className="header" style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "10px 20px", 
      background: "#f4f4f4" 
    }}>
      <h2>Welcome back, Aiym!</h2>
      <div style={{ display: "flex", gap: "20px", fontSize: "20px", alignItems: "center", marginRight: "50px" }}>
        <img src="/src/assets/images/bu_logo.png" alt="icon1" style={{ width: "37px", height: "28px", cursor: "pointer" }} />
        <img src="/src/assets/images/moon.png" alt="icon2" style={{ width: "24px", height: "24px", cursor: "pointer" }} />
        <img src="/src/assets/images/notification.png" alt="icon3" style={{ width: "24px", height: "24px", cursor: "pointer" }} />
        <img src="/src/assets/images/logo_user.png" alt="icon4" style={{ width: "30px", height: "30px", cursor: "pointer" }} />
        {/* <FaMoon style={{ cursor: "pointer" }} />
        <FaBell style={{ cursor: "pointer" }} />
        <FaUserCircle style={{ cursor: "pointer" }} /> */}
      </div>
    </div>
  );
};

export default Header;