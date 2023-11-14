import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/food-img.png";
import CartImg from "../../assets/shopping-cart.png";
import useOnlineStatus from "../../utills/custom hooks/useOnlineStatus";

const HeaderComponent = () => {
  const [btnName,setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="food logo" />
      </div>
      <div className="nav-items">
        <ul className="list-items">
          <li>Online Status: {onlineStatus? "online":"offline"}</li>
          <li>
            <Link to="/">Home</Link></li>
          <li>
            <Link to="/about" >About Us</Link></li>
            <li>
            <Link to="/grocery" >Gorcery</Link></li>
          <li>
            <Link to="/contact">Contact Us</Link></li>
          <li className="login-btn" onClick={()=>{btnName === "Login" ? setBtnName("Logout"):setBtnName("Login")}}>{btnName}</li>
          <li>
            <img src={CartImg} className="cart-icon" alt="cart" />
            <span className="cart-badge">0</span>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
