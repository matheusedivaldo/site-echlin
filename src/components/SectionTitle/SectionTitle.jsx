import styles from './SectionTitle.module.css';

export function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  return (
    <header className={`${styles.wrapper} ${align === 'center' ? styles.center : ''}`}>
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
