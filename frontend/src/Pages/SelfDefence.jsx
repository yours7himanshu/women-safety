import Video from "../Components/Assets/defence-video.mp4";
import image1 from "../Components/Assets/1.jpg";
import image2 from "../Components/Assets/image2.jpg";
import image4 from "../Components/Assets/image4.jpg";
import image5 from "../Components/Assets/image5.jpg";
import image6 from "../Components/Assets/image6.jpg";

const SelfDefense = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-pink-50 to-purple-50 pt-20">
      <div className="flex flex-col md:flex-row justify-evenly items-center p-8 gap-8">
        <div className="flex flex-col items-center justify-center p-6 mt-8 gap-8 w-full md:w-1/2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
          <h1 className="text-pink-600 text-4xl md:text-5xl font-bold text-center leading-tight">
            Your Safety Matters: Learn Key Self-Defense Skills!!
          </h1>
          <p className="text-gray-600 text-center text-lg leading-relaxed">
            In today's world, personal safety is more important than ever. Empowering yourself with self-defense knowledge is a crucial step in ensuring your own security. Our self-defense page offers practical tips and techniques designed to help you stay aware, trust your instincts, and respond effectively in challenging situations.
          </p>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={image1} alt="Self Defense" className="h-auto w-full object-cover" />
          </div>
        </div>
        <div className="w-full md:w-1/3 h-[600px] flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-4">
          <div className="rounded-xl overflow-hidden shadow-lg w-full h-full">
            <video autoPlay muted controls src={Video} className="h-full w-full object-cover rounded-xl">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-16 gap-12 py-20 bg-white/50">
        <h1 className="text-pink-600 text-4xl md:text-5xl font-bold text-center">
          Some Tips You Must Learn!!!
        </h1>
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <img src={image2} alt="Self Defense Tips" className="w-full h-auto object-contain rounded-xl" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center py-20 px-8 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="flex flex-col justify-center items-center gap-8 w-full md:w-2/5 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
          <h1 className="text-pink-600 text-4xl md:text-5xl font-bold text-center leading-tight">
            Emergency Response: What to Do in a Crisis??
          </h1>
          <p className="text-gray-600 text-center text-lg leading-relaxed">
            When faced with a dangerous situation, knowing how to respond swiftly and effectively can make a significant difference. This section provides guidance on what steps to take if you find yourself in an emergency. First and foremost, prioritize your safety by creating distance between yourself and the threat. Use personal safety devices like alarms or pepper spray if you have them, and do not hesitate to call for help. Memorize emergency numbers and keep your phone easily accessible.
          </p>
        </div>
        <div className="flex gap-4 justify-center items-center w-full md:w-1/3">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-4">
            <img src={image4} alt="Emergency Response" className="h-96 w-full object-cover rounded-xl" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="flex flex-col justify-center items-center gap-12 w-full">
          <h1 className="text-pink-600 text-4xl md:text-5xl font-bold text-center">
            Learn Some KnockOut Moves!!!
          </h1>
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl px-4 justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 w-full md:w-2/5">
              <img src={image5} alt="Knockout Move 1" className="w-full h-96 object-cover rounded-xl" />
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 w-full md:w-2/5">
              <img src={image6} alt="Knockout Move 2" className="w-full h-96 object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfDefense;