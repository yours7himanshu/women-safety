import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
      <div className="text-5xl text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

function Services() {
  const servicesData = [
    {
      title: 'Emergency Assistance',
      description: 'Instant help and location sharing with trusted contacts during emergencies.',
      icon: '🚨',
    },
    {
      title: 'Self-Defense Training',
      description: 'Comprehensive guides and resources for learning essential self-defense techniques.',
      icon: '🥋',
    },
    {
      title: 'Mental Health Support',
      description: 'Access to professional counselors and resources for mental well-being.',
      icon: '🧠',
    },
    {
      title: 'Legal Aid & Rights',
      description: 'Information and assistance regarding legal rights and aid for women.',
      icon: '⚖️',
    },
    {
      title: 'Health & Wellness',
      description: 'Resources and articles on physical health, nutrition, and overall well-being.',
      icon: '🍎',
    },
    {
      title: 'Community Support',
      description: 'Connect with a supportive community, share experiences, and find solidarity.',
      icon: '🤝',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;