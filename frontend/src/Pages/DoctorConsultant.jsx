import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Women from '../Components/Assets/women.png';

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
    <div className="p-2 h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="my-12 text-blue-800 text-3xl font-bold text-center">Feel free to share your problem with Us!!!</h1>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full h-full gap-8">
        <form onSubmit={handleSubmit} method="post" className="w-full md:w-1/2 flex flex-col mb-5 items-center">
          <input 
            type="text"
            required
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-3/4 p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email" 
            required
            placeholder="Enter your Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-3/4 p-2 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number" 
            required
            placeholder="Enter your Mobile No"
            value={phone_no}
            onChange={(e)=>setPhone(e.target.value)}
            className="w-3/4 p-2 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text" 
            required
            placeholder="Enter your Problem"
            value={problem}
            onChange={(e)=>setProblem(e.target.value)}
            className="w-3/4 p-2 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text" 
            required
            placeholder="Enter Description of your Problem"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            className="w-3/4 p-2 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-3/4 p-3 mt-5 bg-blue-600 text-white border-none rounded-md cursor-pointer hover:bg-blue-700 transition-colors duration-300">
            Submit
          </button>
        </form>
        <div className="flex justify-center items-start h-screen w-full md:w-1/2">
          <img src={Women} alt="" className="w-[400px] h-[500px] rounded-lg object-cover" />
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default DoctorConsultant;