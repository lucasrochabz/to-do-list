import styles from './Button.module.css';

// fix: add esse componente no lugar correto
const Button = ({ variant = 'primary', children, ...props }) => {
  const variantClass = styles[variant] || styles.primary;

  return (
    <button className={variantClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
