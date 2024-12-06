import PropTypes from 'prop-types';

function GradientText({ children, className = '' }) {
  return (
    <span className={`bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  );
}

GradientText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default GradientText;