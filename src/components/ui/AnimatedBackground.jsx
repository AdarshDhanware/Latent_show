import React from 'react';

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Diagonal lines */}
      <div className="absolute inset-0" 
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(139, 92, 246, 0.05) 0px,
            rgba(139, 92, 246, 0.05) 1px,
            transparent 1px,
            transparent 30px
          )`,
          backgroundSize: '42.43px 42.43px',
        }}
      />
      
      {/* Vertical lines */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            rgba(139, 92, 246, 0.03) 0px,
            rgba(139, 92, 246, 0.03) 1px,
            transparent 1px,
            transparent 30px
          )`,
        }}
      />
      
      {/* Horizontal lines */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(139, 92, 246, 0.03) 0px,
            rgba(139, 92, 246, 0.03) 1px,
            transparent 1px,
            transparent 30px
          )`,
        }}
      />
    </div>
  );
}

export default AnimatedBackground;