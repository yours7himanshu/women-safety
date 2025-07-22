import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState("Shop");
  const [isLogin, setIsLogin] = useState(false);
  const [openMenu, setIsOpenMenu] = useState(false);
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
    <div className="flex justify-between  items-center p-4 shadow-md h-16 w-full bg-pink-600 fixed z-90">
      <div className="flex items-center gap-2">
        <p className="text-white text-2xl md:text-4xl font-bold">ProtectHerZone</p>
      </div>
      <div className="md:hidden flex flex-col cursor-pointer" onClick={() => setIsOpenMenu((prev) => !prev)}>
        <div className={`w-6 h-1 bg-white my-1 ml-20 transition-transform ${openMenu ? "transform rotate-45 translate-y-2" : ""}`}></div>
        <div className={`w-6 h-1 bg-white my-1 ml-20 transition-opacity ${openMenu ? "opacity-0" : ""}`}></div>
        <div className={`w-6 h-1 bg-white my-1 ml-20 transition-transform ${openMenu ? "transform -rotate-45 -translate-y-2" : ""}`}></div>
      </div>
      <ul className={`md:flex items-center justify-center gap-8 ml-16 text-white text-lg font-medium ${openMenu ? "flex flex-col absolute top-16 left-0 w-full bg-pink-600 shadow-lg p-4" : "hidden"}`}>
        {isLogin ? (
          <>
            <li onClick={() => { setIsActive("shop"); setIsOpenMenu(false); }} className="cursor-pointer">
              <Link to="/shop" className="no-underline text-white">Home</Link>
              {isActive === "shop" && <hr className="border-none w-4/5 h-1 rounded-full bg-white" />}
            </li>
            <li onClick={() => { setIsActive("Contact"); setIsOpenMenu(false); }} className="cursor-pointer">
              <Link to="/contact" className="no-underline text-white">Contact Us</Link>
              {isActive === "Contact" && <hr className="border-none w-4/5 h-1 rounded-full bg-white" />}
            </li>
            <li onClick={() => { setIsActive("About"); setIsOpenMenu(false); }} className="cursor-pointer">
              <Link to="/about" className="no-underline text-white">About</Link>
              {isActive === "About" && <hr className="border-none w-4/5 h-1 rounded-full bg-white" />}
            </li>
            <li onClick={() => { setIsActive("Services"); setIsOpenMenu(false); }} className="cursor-pointer">
              <Link to="/sevices" className="no-underline text-white">Explore</Link>
              {isActive === "Services" && <hr className="border-none w-4/5 h-1 rounded-full bg-white" />}
            </li>
          </>
        ) : null}
      </ul>
      <div className="flex items-center gap-12">
        {!isLogin ? (
          <Link to="/login">
            <button className="w-32 h-12 outline-none border-none rounded-lg text-pink-600 bg-white text-lg font-medium cursor-pointer">Login</button>
          </Link>
        ) : (
          <>
            <h5 className="text-white max-md:hidden">{username}</h5>
            <button onClick={handleLogout} className="w-32 h-12 outline-none border-none rounded-lg text-pink-600 bg-white text-lg font-medium max-md:hidden cursor-pointer">Logout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;