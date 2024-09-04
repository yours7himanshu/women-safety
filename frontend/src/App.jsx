import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";

import LoginSignUp from "./Pages/LoginSignUp";
import NewsLetter from "./Components/NewsLetter/NewsLetter";

import Footer from "./Components/Footer/Footer";
import SignUp from "./Pages/SignUp";
import DoctorConsultant from "./Pages/DoctorConsultant";
import MentalHealthTaskManager from "./Pages/MentalHealthTaskManager";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import About from "./Pages/About";
import DoctorsList from "./Components/Doctor/DoctorsList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
    
        <Route path="/" element={<Shop />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/login/SignUp" element={<SignUp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/doctor" element={<DoctorConsultant />} />
        <Route path="/submit-newsletter" element={<NewsLetter />} />
        <Route path="/taskManager" element={<MentalHealthTaskManager />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About />} />
        <Route path="/findDoctor" element={<DoctorsList />} />
        <Route path="/userLocation" element = {}/>


      
     
      </Routes>
      <Footer />
    </>
  );
}

export default App;
