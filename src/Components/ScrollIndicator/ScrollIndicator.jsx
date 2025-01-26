import React from 'react';
import './ScrollIndicator.css'; // Vamos adicionar o estilo no arquivo CSS

const ScrollIndicator = () => {
  return (
    <div className="scroll-indicator">
      <div className="scroll-arrow">
        <span>↓</span>
      </div>
    </div>
  );
};

export default ScrollIndicator;
