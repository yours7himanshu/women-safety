// src/components/SelfDefensePage.js
import Video from "../Components/Assets/defence-video.mp4"
import "./Defence.css"
import image1 from "../Components/Assets/1.jpg"
import image2 from "../Components/Assets/image2.jpg"
// import image3 from "../Components/Assets/image3.jpg"
import image4 from "../Components/Assets/image4.jpg"
import image5 from "../Components/Assets/image5.jpg"
import image6 from "../Components/Assets/image6.jpg"





const SelfDefense = () => {
  return (
    <div className="self-defensePage">
        <div className="self-defense">
        <div className="self-left">
        <h1>Your Safety Matters: Learn Key Self-Defense Skills!!</h1>
        <p>In today’s world, personal safety is more important than ever. Empowering yourself with self-defense knowledge is a crucial step in ensuring your own security. Our self-defense page offers practical tips and techniques designed to help you stay aware, trust your instincts, and respond effectively in challenging situations. </p>
        <img src={image1} alt="" />
        </div>
      <div className="self-right">
        <video autoPlay muted src={Video}></video>
      </div>
        </div>
       <div className="anotherSelfDefTips">
        <h1>Some Tips You Must Learn!!!</h1>
        <img src={image2} alt="" />
       </div>
       <div className="emergency-response">
        <div className="emergency-left">
            <h1>Emergency Response: What to Do in a Crisis??</h1>
            <p>When faced with a dangerous situation, knowing how to respond swiftly and effectively can make a significant difference. This section provides guidance on what steps to take if you find yourself in an emergency. First and foremost, prioritize your safety by creating distance between yourself and the threat. Use personal safety devices like alarms or pepper spray if you have them, and do not hesitate to call for help. Memorize emergency numbers and keep your phone easily accessible. </p>

        </div>
        <div className="emergency-right">
            {/* <img src={image3} alt="" /> */}
            <img src={image4} alt="" />
        </div>
       </div>
       <div className="knock-out">
        <div className="knock-final">
        <h1>Learn Some KnockOut Moves!!!</h1>
        <div className="knock-image">
        <img src={image5} alt="" />
         <img src={image6} alt="" />
        </div>
        </div>
       </div>
    </div>
  );
};

export default SelfDefense;
