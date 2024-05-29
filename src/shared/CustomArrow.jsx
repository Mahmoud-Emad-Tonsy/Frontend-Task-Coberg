
import React from 'react';

const CustomArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: 'block', background: '#f4f4f4', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    onClick={onClick}
  >
    <span style={{ fontSize: '35px', color: '#4b0082' }}>&gt;</span>
  </div>
);

export default CustomArrow;
