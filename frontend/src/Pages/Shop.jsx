import Hero from "../Components/Hero/Hero";
import "./Shop.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";


// import Offers from "../Components/Offers/Offers";
import Features from "../Components/Features/Features";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Shop() {
  const navigate = useNavigate();

  const [toastShown, setToastShown] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!toastShown) {
        toast("Namaste 🙏!Have A Good Day", { position: "top-center", });
        setToastShown(true); // Update state to indicate toast has been shown
      }
    }, 2000); // Change timeout to 2000 milliseconds (2 seconds)

    return () => clearTimeout(timer); // Cleanup function to clear the timer
  }, [toastShown]); // useEffect will run whenever toastShown changes

 
  useEffect(() => {

    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const user = jwtDecode(token);
        if (!user) {
          // Token is invalid or expired
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
      } catch (error) {
        // An error occurred while decoding the token
        console.error("Error decoding token:", error);
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
    } else {
      // No token found, navigate to login
      navigate("/login");
    }
    
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, [navigate]);

  
  return (
    <div>
      <Hero />
      <div
        className="choosingUs"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h1>Why Choosing Us??</h1>
        <p>
        Choosing Us means choosing a trusted partner in your journey towards safety and empowerment. We prioritize your well-being by offering comprehensive resources tailored specifically to women’s safety needs. Our platform is built on a foundation of expertise, compassion, and a deep understanding of the unique challenges women face today. From practical self-defense techniques to cutting-edge safety tools, we provide everything you need to feel secure and confident in any situation. 
        </p>
      </div>
    <Features/> 
     
      <NewsLetter />
      <ToastContainer/>
    </div>
  );
}

export default Shop;
