import social from '@/data/social.json';
import { SocialIcon } from '@/components/SocialIcon/SocialIcon';
import styles from './SocialBar.module.css';

export function SocialBar() {
  return (
    <section className={styles.bar}>
      <div className={styles.inner}>
        <span className={styles.label}>Siga a Echlin nas redes sociais</span>
        <div className={styles.icons}>
          {social.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label={item.label}
            >
              <SocialIcon id={item.id} label={item.label} size={22} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
