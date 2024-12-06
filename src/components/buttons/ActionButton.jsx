import PropTypes from 'prop-types';

function ActionButton({ children, variant = 'primary', onClick }) {
  const baseClasses = "px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2";
  const variants = {
    primary: "bg-purple-600 hover:bg-purple-700",
    secondary: "border-2 border-purple-600 hover:bg-purple-600/20"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

ActionButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func
};

export default ActionButton;