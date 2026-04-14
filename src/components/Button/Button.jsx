import styles from './Button.module.css';

const Button = ({ variant = 'primary', children, ...props }) => {
  const variantClass = styles[variant] || styles.primary;

  return (
    <button className={`${styles.base} ${variantClass}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
