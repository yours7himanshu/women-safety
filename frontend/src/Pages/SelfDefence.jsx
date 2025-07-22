import Video from "../Components/Assets/defence-video.mp4";
import image1 from "../Components/Assets/1.jpg";
import image2 from "../Components/Assets/image2.jpg";
import image4 from "../Components/Assets/image4.jpg";
import image5 from "../Components/Assets/image5.jpg";
import image6 from "../Components/Assets/image6.jpg";

const SelfDefense = () => {
  return (
    <div className="py-5">
      <div className="flex flex-col md:flex-row justify-evenly items-center p-5 gap-5">
        <div className="flex flex-col items-center justify-center p-2 mt-5 gap-5 w-full md:w-1/2">
          <h1 className="text-pink-600 text-3xl font-bold text-center">Your Safety Matters: Learn Key Self-Defense Skills!!</h1>
          <p className="text-gray-600 text-center">In today’s world, personal safety is more important than ever. Empowering yourself with self-defense knowledge is a crucial step in ensuring your own security. Our self-defense page offers practical tips and techniques designed to help you stay aware, trust your instincts, and respond effectively in challenging situations.</p>
          <img src={image1} alt="" className="h-auto w-full object-cover" />
        </div>
        <div className="w-full md:w-1/4 h-screen flex items-center justify-center">
          <video autoPlay muted controls src={Video} className="h-full w-full object-cover"></video>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-10 gap-8 h-screen w-full">
        <h1 className="text-pink-600 text-3xl font-bold text-center">Some Tips You Must Learn!!!</h1>
        <img src={image2} alt="" className="w-3/4 h-3/4 object-contain" />
      </div>

      <div className="flex flex-col md:flex-row gap-5 justify-center items-center h-screen w-full">
        <div className="flex flex-col justify-center items-center gap-5 w-full md:w-2/5 h-screen">
          <h1 className="text-pink-600 text-3xl font-bold text-center">Emergency Response: What to Do in a Crisis??</h1>
          <p className="text-gray-600 text-center">When faced with a dangerous situation, knowing how to respond swiftly and effectively can make a significant difference. This section provides guidance on what steps to take if you find yourself in an emergency. First and foremost, prioritize your safety by creating distance between yourself and the threat. Use personal safety devices like alarms or pepper spray if you have them, and do not hesitate to call for help. Memorize emergency numbers and keep your phone easily accessible.</p>
        </div>
        <div className="flex gap-2 justify-center items-center h-full">
          <img src={image4} alt="" className="h-1/2 object-contain" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-screen w-full">
        <div className="flex flex-col justify-center items-center gap-8 h-full w-full">
          <h1 className="text-pink-600 text-3xl font-bold text-center">Learn Some KnockOut Moves!!!</h1>
          <div className="flex gap-5 w-full justify-center">
            <img src={image5} alt="" className="w-2/5 h-3/4 object-contain" />
            <img src={image6} alt="" className="w-2/5 h-3/4 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfDefense;