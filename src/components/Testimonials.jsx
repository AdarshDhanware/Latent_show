import PropTypes from 'prop-types';

function TestimonialCard({ quote, author, title, index }) {
  return (
    <div 
      className="bg-black/50 p-8 rounded-xl border border-purple-500/20 
        transform hover:scale-105 transition-all slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <p className="text-gray-300 mb-6 italic">"{quote}"</p>
      <div>
        <p className="text-purple-400 font-semibold">{author}</p>
        <p className="text-gray-500 text-sm">{title}</p>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

const testimonials = [
  {
    quote: "I came to showcase my singing. Left questioning my life choices. 10/10 would recommend!",
    author: "Disappointed Dreamer",
    title: "Season 0 Contestant"
  },
  {
    quote: "The judges' feedback was so harsh, my ego needed therapy. At least I'm TikTok famous now!",
    author: "Reality Check Recipient",
    title: "Almost Made It"
  },
  {
    quote: "Thought I was the next big thing. Turns out I was just the next big meme. Thanks, I guess?",
    author: "Viral Sensation",
    title: "Social Media Star"
  }
];

function Testimonials() {
  return (
    <div className="bg-gradient-to-b from-black to-purple-900/20 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16 slide-up">
          What Our Contestants Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;