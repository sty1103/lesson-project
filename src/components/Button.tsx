import React from 'react';
import styles from '../styles/Button.module.scss';

interface ButtonProps {
  children: string;
  theme?: string;
}

const Button: React.FC<ButtonProps> = ({ children, theme='default' }) => {
  console.log( theme );
  return (
    <button className={`${styles.btn} ${styles[`btn-${theme}`]}`}>
      {children}
    </button>
  )
}

export default Button;