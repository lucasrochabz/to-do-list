import styles from './EmptyState.module.css';

type EmptyStateProps = {
  image: string;
  title: string;
  description: string;
}

const EmptyState = ({ image, title, description }: EmptyStateProps) => {
  return (
    <section className={styles.container}>
      <img src={image} alt="" aria-hidden="true" className={styles.image} />
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default EmptyState;
