import React from 'react';
import 'components/Button/index.scss';

import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <Link to="/activity" className="button">
      Let's find out!
    </Link>
  );
};

export default Button;
