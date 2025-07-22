import React from 'react';

const Card = ({ image, title, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 transform hover:-translate-y-2 hover:shadow-xl transition-transform transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-base text-gray-600 mb-5">{description}</p>
        <a href={buttonLink} className="inline-block py-2 px-5 bg-blue-500 text-white no-underline rounded hover:bg-blue-700 transition-colors duration-300">{buttonText}</a>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardData = [
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Card 1',
      description: 'This is a description for card 1.',
      buttonText: 'Learn More',
      buttonLink: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Card 2',
      description: 'This is a description for card 2.',
      buttonText: 'Learn More',
      buttonLink: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Card 3',
      description: 'This is a description for card 3.',
      buttonText: 'Learn More',
      buttonLink: '#',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-5 p-5 bg-gray-100">
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          buttonLink={card.buttonLink}
        />
      ))}
    </div>
  );
};

export default Cards;