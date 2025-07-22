import React, { useState, useEffect } from 'react';

const Breathe = () => {
  const [text, setText] = useState('Breathe In');

  useEffect(() => {
    const container = document.getElementById('container');
    const totalTime = 7500;
    const breatheTime = (totalTime / 5) * 2;
    const holdTime = totalTime / 5;

    const breatheAnimation = () => {
      setText('Breathe In');
      container.className = 'flex items-center justify-center h-72 w-72 m-auto bg-gray-300 rounded-full transform scale-100 transition-transform duration-3000 ease-in-out';

      setTimeout(() => {
        setText('Hold');

        setTimeout(() => {
          setText('Breathe Out');
          container.className = 'flex items-center justify-center h-72 w-72 m-auto bg-gray-300 rounded-full transform scale-50 transition-transform duration-3000 ease-in-out';
        }, holdTime);
      }, breatheTime);
    };

    breatheAnimation();
    const intervalId = setInterval(breatheAnimation, totalTime);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl mb-8">Breathe to Relax</h1>
      <div id="container" className="flex items-center justify-center h-72 w-72 m-auto bg-gray-300 rounded-full transform scale-100 transition-transform duration-3000 ease-in-out">
        <div className="h-24 w-24 bg-gray-800 rounded-full flex items-center justify-center">
          <div id="text" className="text-white text-lg">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Breathe;