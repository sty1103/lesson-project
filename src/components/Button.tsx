import React from 'react';
import styles from '../styles/Button.module.scss';

interface ButtonProps {
  children: string | JSX.Element | JSX.Element[];
  theme?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, theme='default', className }) => {
  return (
    <button className={`${styles.btn} ${styles[`btn-${theme}`]} ${className}`}>
      {children}
    </button>
  )
}

export default Button;