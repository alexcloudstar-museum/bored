import React from 'react';
import 'components/Button/index.scss';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default Button;
