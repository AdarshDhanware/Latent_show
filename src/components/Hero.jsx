import { Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ActionButton from './buttons/ActionButton';
import GradientText from './ui/GradientText';
import AnimatedBackground from './ui/AnimatedBackground';
import EventDate from './ui/EventDate';

function Hero() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <AnimatedBackground />

      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/80 to-black/95" />

      <div className="absolute inset-0">
        <div className="h-full w-full" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.4'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6 animate-float">
            <Star className="text-yellow-500 w-8 h-8 animate-pulse-glow" />
            <h2 className="text-xl font-medium text-yellow-500">Season 1</h2>
            <Star className="text-yellow-500 w-8 h-8 animate-pulse-glow" />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 slide-up">
            <GradientText>Oriental's Got Latent</GradientText>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 slide-up stagger-delay-1">
            Where talent meets sarcasm, and dreams meet reality checks
          </p>

          <div className="flex justify-center mb-8 slide-up stagger-delay-2">
            <EventDate date="December 07, 2024" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up stagger-delay-3">
            <Link to="https://forms.gle/Va4BVrvg5H2TbG1Z7">
              <ActionButton
                variant="primary"
                className="transform hover:scale-105 transition-transform"
              >
                <Sparkles className="w-5 h-5" />
                Register Now
              </ActionButton>
            </Link>
            <Link to="https://www.instagram.com/orientals_got_latent/">
              <ActionButton
                variant="secondary"
                className="transform hover:scale-105 transition-transform"
              >
                Our Page
              </ActionButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;