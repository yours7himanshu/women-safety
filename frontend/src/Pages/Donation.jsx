import UPI from "../Components/Assets/UPI.jpg"

import "./Donation.css"

function Donation() {
  return (
    <div>
      <div className="donation-page">
        <h1 style={{color:"#5b21b6"}} >SCAN HERE!!!</h1>
        <div className="donation-card">
            <img src={UPI} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Donation
