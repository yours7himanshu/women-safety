import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import SelfDefense from "./Pages/SelfDefence";
import LoginSignUp from "./Pages/LoginSignUp";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import UserLocation from "./Pages/UserLocation";
import Footer from "./Components/Footer/Footer";
import SignUp from "./Pages/SignUp";
import DoctorConsultant from "./Pages/DoctorConsultant";
import MentalHealthTaskManager from "./Pages/MentalHealthTaskManager";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import About from "./Pages/About";
import DoctorsList from "./Components/Doctor/DoctorsList";
import PoliceStation from "./Pages/PoliceStation";
import Emergency from "./Components/EmergencyButton/Emergency";
import Donation from "./Pages/Donation";
import FamilyContactForm from "./Pages/FamilyContactForm";
import DetailDisplay from "./Pages/DetailDisplay";
import Message from "./Components/Message Sent/Message";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
    
        <Route path="/" element={<Shop />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/login/SignUp" element={<SignUp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/problem" element={<DoctorConsultant />} />
        <Route path="/submit-newsletter" element={<NewsLetter />} />
        <Route path="/taskManager" element={<MentalHealthTaskManager />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About />} />
        <Route path="/findDoctor" element={<DoctorsList />} />
        <Route path="/userLocation" element = {<UserLocation/>}/>
        <Route path="/policeStation" element = {<PoliceStation/>}/>
        <Route path="/emergency" element = {<Emergency/>}/>
        <Route path="/selfDefence" element = {<SelfDefense/>}/>
        <Route path="/donation" element = {<Donation/>}/>
        <Route path="/familyDetails" element = {<FamilyContactForm/>}/>
        <Route path="/detailDisplay" element = {<DetailDisplay/>}/>
        <Route path="/message" element = {<Message/>}/>









      
     
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
