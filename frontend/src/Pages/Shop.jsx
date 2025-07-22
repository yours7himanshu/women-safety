import Hero from "../Components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
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
        setToastShown(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [toastShown]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const user = jwtDecode(token);
        if (!user) {
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
    } else {
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
    <div className="bg-gradient-to-br from-pink-50 to-rose-50">
      <Hero />
      
      {/* Why Choose Us Section */}
      <div className="relative overflow-hidden py-20 lg:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-rose-600 to-pink-700">
          <div className="absolute inset-0 bg-black/10"></div>
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-rose-400 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-300 rounded-full opacity-10 blur-xl animate-bounce"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div
            className="text-center"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg border border-white/10">
              <span className="w-2 h-2 bg-pink-300 rounded-full mr-3 animate-pulse"></span>
              Your Trusted Safety Partner
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="block">Why Choose</span>
              <span className="bg-gradient-to-r from-pink-200 via-white to-rose-200 bg-clip-text text-transparent">
                ProtectHerZone?
              </span>
            </h1>

            {/* Description */}
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-pink-100 leading-relaxed mb-12">
                Choosing us means choosing a trusted partner in your journey towards safety and empowerment. 
                We prioritize your well-being by offering comprehensive resources tailored specifically to women's safety needs.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Expert Protection</h3>
                <p className="text-pink-100 text-sm leading-relaxed">
                  Built on expertise, compassion, and deep understanding of unique challenges women face today.
                </p>
              </div>

              <div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-pink-100 text-sm leading-relaxed">
                  From practical self-defense techniques to cutting-edge safety tools, available round the clock.
                </p>
              </div>

              <div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105 md:col-span-2 lg:col-span-1"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Empowerment Focus</h3>
                <p className="text-pink-100 text-sm leading-relaxed">
                  Everything you need to feel secure and confident in any situation, designed with care.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16">
              <button className="group bg-white hover:bg-pink-50 text-pink-600 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                <span className="flex items-center justify-center">
                  Start Your Safety Journey
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
       
      </div>

      <Features/> 
      <NewsLetter />
      <ToastContainer/>
    </div>
  );
}

export default Shop;