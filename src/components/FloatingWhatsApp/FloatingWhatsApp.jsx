import { SocialIcon } from '@/components/SocialIcon/SocialIcon';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import styles from './FloatingWhatsApp.module.css';

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Falar no WhatsApp"
    >
      <SocialIcon id="whatsapp" size={26} />
    </a>
  );
}
