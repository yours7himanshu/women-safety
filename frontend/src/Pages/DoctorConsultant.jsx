import "./DoctorConsultant.css"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Doctor from '../Components/Assets/doctor.jpg';
// import DoctorsList from "../Components/Doctor/DoctorsList";


function DoctorConsultant() {
   const [name,setName] = useState('');
   const [email,setEmail]= useState('');
   const [phone_no,setPhone]= useState('');
   const[problem,setProblem]= useState('');
   const [description,setDescription]=useState('');


    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:3001/api/v1/u/patient", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name,email,phone_no,problem,description }),
        });
        const data = await response.json();
        if(data){
            toast.success("Your Respone is Noted.We will reach out to you soon!!",{
                position:"top-center",
              
            });

        }
    }

  return (
    <div className="main" >
   <h1>  Feel free to share your problem with Us!!!</h1>
<div className="doctor-consult">
<form onSubmit={handleSubmit} method="post" >

  <div className="label-input">
  
    <input 
      type="name"
      required
      placeholder="Enter your name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
    />
  </div>

  <div className="label-input">

    <input
      type="email" 
      required
      placeholder="Enter your Email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
    />
  </div>

  <div className="label-input">
    
    <input
      type="number" 
      required
      placeholder="Enter your Mobile No"
      value={phone_no}
      onChange={(e)=>setPhone(e.target.value)}
    />
  </div>

  <div className="label-input">
  
    <input
      type="text" 
      required
      placeholder="Enter your Problem"
      value={problem}
      onChange={(e)=>setProblem(e.target.value)}
    />
  </div>

  <div className="label-input">
 
    <input
      type="text" 
      required
      placeholder="Enter Description of your Problem"
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
    />
  </div>

  <button className="form-btn" >Submit</button>
</form>

<div className="image-container">
<img src={Doctor} alt="" />
</div>

</div>

{/* <DoctorsList /> */}


   <ToastContainer/>
    </div>

    
  )
}

export default DoctorConsultant
