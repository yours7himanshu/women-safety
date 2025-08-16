
import { Link } from 'react-router-dom';
// Import images from Assets folder
import LiveLocationImg from '../Assets/Live Location.jpg';
import PoliceStationImg from '../Assets/Police.jpg';
import SelfDefenceImg from '../Assets/Self Defence.jpg';
import EmergencyImg from '../Assets/Emergency.jpg';
import DonationImg from '../Assets/Donation.webp';
import ContactImg from '../Assets/Contact.png';
import CommunityImg from '../Assets/events.jpg';
import Alert from '../Assets/Alert.png'

const FeatureCard = ({ image, title, description, route }) => {
  return (
    <Link to={route} className="block">
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer hover:shadow-lg">
        <div className="w-16 h-16 mb-4 rounded-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

const Features = () => {
  const featuresData = [
    {
      image: LiveLocationImg,
      title: 'Live Location',
      description: 'Share your live location with your trusted contacts for safety.',
      route: '/userLocation'
    },
    {
      image: PoliceStationImg,
      title: 'Police Station',
      description: 'Find nearby police stations and emergency services quickly.',
      route: '/policeStation'
    },
    {
      image: SelfDefenceImg,
      title: 'Self Defence',
      description: 'Learn self-defense techniques to protect yourself in any situation.',
      route: '/selfDefence'
    },
    {
      image: EmergencyImg,
      title: 'Emergency',
      description: 'Quick access to emergency contacts and panic button features.',
      route: '/emergency'
    },
    {
      image: DonationImg,
      title: 'Donation',
      description: 'Support women safety initiatives and help make a difference.',
      route: '/donation'
    },
    {
      image: ContactImg,
      title: 'Family Details',
      description: 'Manage and share family contact information for emergencies.',
      route: '/familyDetails'
    },
    {
      image: Alert ,
      title: 'Alert System',
      description: 'Send Alert to your emergency contacts and authorities.',
      route: '/detailDisplay'
    },
    {
      image: CommunityImg,
      title: 'Community',
      description: 'Connect with other women and join safety awareness events.',
      route: '/community'
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              route={feature.route}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;