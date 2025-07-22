import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
      <div className="text-4xl text-pink-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const featuresData = [
    {
      icon: '🛡️',
      title: 'Self Defence',
      description: 'Learn self-defense techniques to protect yourself in any situation.',
    },
    {
      icon: '🧘',
      title: 'Yoga & Meditation',
      description: 'Find inner peace and strength through guided yoga and meditation sessions.',
    },
    {
      icon: '👩‍⚕️',
      title: 'Doctor Consultant',
      description: 'Connect with experienced doctors for your health concerns.',
    },
    {
      icon: '📍',
      title: 'Live Location',
      description: 'Share your live location with your trusted contacts for safety.',
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;