import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonVariant } from '@/types/button';
import styles from './Button.module.css';

type ButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
  const variantClass = styles[variant] || styles.primary;

  return (
    <button className={`${styles.base} ${variantClass}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
