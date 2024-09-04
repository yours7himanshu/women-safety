import './Hero.css';

import Women from '../Assets/women.png'


function Hero() {
  return (
    <div className="hero" >
    <div className="hero-left">
      <h1>Women’s Safety: Empower, Protect, Thrive</h1>
      <p>We are dedicated to creating a safer world for women everywhere. Our platform provides essential resources, tools, and knowledge to help women protect themselves in various situations. From self-defense tips to the latest safety apps, we cover it all to ensure that every woman feels confident and secure. We believe that safety is a fundamental right, and through awareness, education, and community support, we aim to empower women to live their lives without fear.</p>
      <div className="buttons">
        <button className='button1' >Explore Now</button>
        <button className='button2' >Services</button>
      </div>
    </div>


  <div className="hero-right">
    <img src={Women}/>
  </div>
    </div>
  )
}

export default Hero
