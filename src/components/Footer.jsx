import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import GradientText from './ui/GradientText';
import PropTypes from 'prop-types';

function SocialLink({ Icon, href }) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-purple-400 transition-colors"
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}

SocialLink.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired
};

const socialLinks = [
  { Icon: Instagram, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Facebook, href: "#" },
  { Icon: Youtube, href: "#" }
];

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold">
              <GradientText>Oriental's Got Lalent</GradientText>
            </h3>
            <p className="text-gray-400 mt-2">Where dreams come to get roasted</p>
          </div>
          
          {/* <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} {...link} />
            ))}
          </div> */}
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 Oriental's Got Lalent. All rights reserved.</p>
          <p className="mt-2">Disclaimer: No talents were harmed in the making of this show. Only egos.</p>
          <p className="mt-2">Created by : Adarsh Dhanware and Ashish Kumar Singh</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;