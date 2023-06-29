import React, { ReactNode } from 'react';
import './Card.css';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  const classes = `Card ${className || ''}`;

  return <div className={classes}>{children}</div>;
};

export default Card;
