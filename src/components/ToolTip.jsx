import React, { useState } from 'react';

const ToolTip = ({ text,color , children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      style={{ display: 'inline-block', position: 'relative' }}
      onMouseEnter={() => setVisible(true)} 
      onMouseLeave={() => setVisible(false)} 
    >
      {children} 
      
      {visible && (
        <div
          style={{
            position: 'absolute',
            top: '-35px', // Position the tooltip above the element
            left: '50%',
            transform: 'translateX(-50%)', // Center the tooltip horizontally
            background: color, // Dark background
            color: 'white', // White text
            padding: '5px',
            borderRadius: '5px',
            fontSize: '12px', // Font size of the tooltip text
            zIndex: 1,
            whiteSpace: 'nowrap', // Prevents text from wrapping
          }}
        >
          {text} {/* Tooltip text */}
           
          <div
            style={{
              position: 'absolute',
              bottom: '-8px', // Position it below the tooltip
              left: '50%',
              transform: 'translateX(-50%)', // Center the triangle
              width: 0,
              height: 0,
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: '8px solid #081A51', // Color of the triangle (matches tooltip background)
            }}
          />

        </div>
      )}
    </div>
  );
};

export default ToolTip;
