import { Brain, ThumbsDown, Trophy, Users } from 'lucide-react';
import PropTypes from 'prop-types';

function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <div 
      className={`p-6 rounded-xl bg-gradient-to-b from-purple-900/50 to-black 
        border border-purple-900/50 hover:border-purple-500/50 transition-all 
        transform hover:scale-105 hover:rotate-1 slide-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Icon className="w-12 h-12 text-purple-400 mb-4 animate-float" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

const features = [
  {
    icon: Brain,
    title: "Talent Optional",
    description: "Because sometimes confidence is all you need. Who needs skills when you have audacity?"
  },
  {
    icon: ThumbsDown,
    title: "Brutal Honesty",
    description: "Our judges don't sugarcoat. They sprinkle salt and serve it with extra spice."
  },
  {
    icon: Users,
    title: "Family Entertainment",
    description: "Watch contestants' dreams shatter with your loved ones. Quality family time guaranteed!"
  },
  {
    icon: Trophy,
    title: "Grand Prize",
    description: "Win a lifetime supply of reality checks and a trophy that says 'At Least You Tried'"
  }
];

function Features() {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl font-bold mb-4">Why Participate?</h2>
          <p className="text-gray-400">Because regular talent shows are too mainstream</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;