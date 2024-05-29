import React from 'react'
import '../assets/sass/shared/_button.scss'
const Button = ({children , className}) => {
  return (
    <div className={`container-btn ${className}`}>
      <button>{children}</button>
    </div>
  );
}

export default Button