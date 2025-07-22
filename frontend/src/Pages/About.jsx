import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 md:text-3xl sm:text-2xl">About Us</h1>
      <div className="max-w-4xl mx-auto leading-relaxed text-gray-700 text-lg sm:text-base">
        <p className="mb-4">
          Welcome to <span className="text-blue-600 font-bold">ProtectHerZone</span>, your dedicated platform for empowering women and ensuring their safety. In today's world, we believe every woman deserves to feel secure, informed, and supported.
        </p>
        <p className="mb-4">
          Our mission is to provide comprehensive resources and tools that promote safety, mental well-being, and self-reliance. We are committed to creating a community where women can access vital information, connect with professionals, and learn essential skills to navigate life confidently.
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-6 md:text-2xl sm:text-xl">What We Offer:</h2>
        <ul className="list-disc list-inside mb-4 ml-5">
          <li className="mb-2">Self-defense techniques and training resources.</li>
          <li className="mb-2">Access to mental health professionals and counseling services.</li>
          <li className="mb-2">Live location sharing for emergencies and trusted contacts.</li>
          <li className="mb-2">Educational content on women's health and well-being.</li>
          <li className="mb-2">Community forums for support and shared experiences.</li>
        </ul>
        <p className="mb-4">
          We are constantly evolving and adding new features to better serve our community. Our team is passionate about making a positive impact and fostering a safer environment for women everywhere.
        </p>
        <p>
          Thank you for being a part of <span className="text-blue-600 font-bold">ProtectHerZone</span>. Together, we can build a stronger, safer future.
        </p>
      </div>
    </div>
  );
}

export default About;