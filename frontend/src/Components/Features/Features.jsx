import "./Features.css"
import Cards from "../Cards/Cards"
import Location from "../Assets/Live Location.jpg"
import Police from "../Assets/Police.jpg"
import SOS from "../Assets/Emergency.jpg"
import SelfDefence from "../Assets/Self Defence.jpg"
import Problem from "../Assets/Problem1.jpg"
import Donation from "../Assets/Donation.webp"
import Contact from "../Assets/Contact.png"
import Discord from "../Assets/Discord.jpg"
import { Link } from "react-router-dom";

function Features() {
  return (
    <div className="features" >
      <h1>Explore Now!!!</h1>
      <div className="card-display">


  <Link to="/userLocation">  <Cards 
     className="display-section"
     image={Location} 
     name="User Live Location"
     />
     </Link> 


<Link to="/policeStation" >
<Cards  
className="display-section"
     image={Police} 
     name="PoliceStation Nearby"/>
</Link>



<Link to= "/emergency" >
<Cards  
className="display-section"
     image={SOS} 
     name="SOS"/></Link>


<Link to="/selfDefence" >
<Cards  
className="display-section"
     image={SelfDefence} 
     name="Self Defense" style={{color:"black"}} />

</Link>


<Link to="/problem">
<Cards  
className="display-section"
     image={Problem} 
     name="Problem Window"/>
</Link>

<Link to="/donation" >
<Cards  
className="display-section"
     image={Donation} 
     name="Donation"/>
</Link>


<Link to="/detailDisplay"><Cards 
     className="display-section"
     image={Contact} 
     name="Add Contacts"
     />   
     </Link>


<Link to="https://discord.com/invite/6kpPn6bW" >
<Cards 
     className="display-section"
     image={Discord} 
     name="Community"
     />
</Link>

      </div>
    </div>
  )
}

export default Features
