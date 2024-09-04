import { useEffect } from "react";
import "./Navbar.css";


import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const [isActive, setIsActive] = useState("Shop");
  const [isLogin, setIsLogin] = useState(false);
  
  const [username, setUsername] = useState("");
  useEffect(() => {
   
    const loginStatus = localStorage.getItem("isLogin");
    const username = localStorage.getItem("username");
    setIsLogin(loginStatus);
    setUsername(username);
   
  }, []);

  async function handleLogout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isLogin");
    localStorage.removeItem("username");
    window.location.href = "/login";
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
      
        <p>ProtectHerZone</p>
      </div>
      <ul className="nav-menu">
        {isLogin ? (
          <>
            <li
              onClick={() => {
                setIsActive("shop");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/shop">
               Home
              </Link>
              {isActive === "shop" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setIsActive("mens");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/contact">
                Contact Us{" "}
              </Link>{" "}
              {isActive === "Contact" ? <hr /> : <></>}{" "}
            </li>
            <li
              onClick={() => {
                setIsActive("About");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/about">
                About
              </Link>{" "}
              {isActive === "About" ? <hr /> : <></>}{" "}
            </li>
            <li
              onClick={() => {
                setIsActive("Services");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/sevices">
                Explore{" "}
              </Link>{" "}
              {isActive === "Services" ? <hr /> : <></>}{" "}
            </li>
          </>
        ) : null}
      </ul>
      <div className="nav-login-cart">
        {!isLogin ? (
          <Link className="button" to="/login">
            <button>Login</button>
          </Link>
        ) : (
          <>
            <h5>{username}</h5>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
        
      </div>
    </div>
  );
}

export default Navbar;
