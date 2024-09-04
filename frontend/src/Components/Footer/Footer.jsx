import './Footer.css'



import pintrester_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"


function Footer() {
  return (
    <div className="footer" >
      <div className="footer-logo">
        
        <p>ProtectHerZone</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socials-icon">
      
        <div className="footer-icons-container">
       <img src={pintrester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
       <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024 - All Right Reserved </p>
      </div>
    </div>
  )
}

export default Footer
