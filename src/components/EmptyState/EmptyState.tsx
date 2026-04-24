import styles from './EmptyState.module.css';

const EmptyState = ({ image, title, description }) => {
  return (
    <section className={styles.container}>
      <img src={image} alt="" aria-hidden="true" className={styles.image} />
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default EmptyState;
