import React from 'react';
import pain from '../../src/assets/Products/logo.jpg'
const Logo = ({ w, h }) => {
  return (
    <img
      src={pain}
      alt="Logo"
      style={{ width: w, height: h }}
    />
  );
};

export default Logo;
