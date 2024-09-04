import  { useState } from "react";
import "./NewsLetter.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function NewsLetter() {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/v1/u/submit-newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    
    });
    const data = await response.json();
  if(data){
    toast.success("You will be notified of our upcoming deals",{
      position:"top-center",
    });
  }

  }

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers on your Email!!</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <form onSubmit={handleSubmit} method="post" className="input">
        <input
          type="email"
          placeholder="Your Email id"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
       

        <button type="submit">Subscribe</button>
 
      </form>
      <ToastContainer/>
    </div>
  );
}

export default NewsLetter;
