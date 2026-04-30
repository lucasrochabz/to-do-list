import { ButtonHTMLAttributes, ReactNode } from 'react';
import { VariantTypes } from '@/types/types';
import styles from './Button.module.css';

type ButtonProps = {
  variant?: VariantTypes;
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
