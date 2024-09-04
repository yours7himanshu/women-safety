import "./Features.css"
import Cards from "../Cards/Cards"
import Sleep from "../Assets/sleep2.jpg"
import Music from "../Assets/music.jpg"
import Diet from "../Assets/diet.jpg"
import Beats from "../Assets/beaths.jpg"
import Event from "../Assets/events.jpg"
import Meditation from "../Assets/meditation2.jpg"
import Podcast from "../Assets/podcast.jpg"
import Doctor from "../Assets/doctor2.jpg"
import { Link } from "react-router-dom";

function Features() {
  return (
    <div className="features" >
      <h1>Explore Now!!!</h1>
      <div className="card-display">


  <Link to="/doctor">  <Cards 
     className="display-section"
     image={Sleep} 
     name="Sleep"
     />
     </Link> 

<Cards  
className="display-section"
     image={Music} 
     name="Music"/>

<Link to= "/taskManager" ><Cards  
className="display-section"
     image={Diet} 
     name="Diet"/></Link>

<Cards  
className="display-section"
     image={Beats} 
     name="Beats"/>

<Cards  
className="display-section"
     image={Event} 
     name="Event"/>

<Cards  
className="display-section"
     image={Meditation} 
     name="Meditation"/>

<Link to="/doctor"><Cards 
     className="display-section"
     image={Doctor} 
     name="Doctor"
     />   
     </Link>

<Cards 
     className="display-section"
     image={Podcast} 
     name="Podcast"
     />
      </div>
    </div>
  )
}

export default Features
