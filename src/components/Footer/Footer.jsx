import { useEffect, useRef, useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import social from '@/data/social.json';
import { SocialIcon } from '@/components/SocialIcon/SocialIcon';
import logo from '@/assets/logo/logo-white.svg';
import styles from './Footer.module.css';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Catálogos', href: '#catalogos' },
  { label: 'Contato', href: '#contato' },
];

export function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = footerRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className={`${styles.footer} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.inner}>
        <div className={`${styles.brand} ${styles.animItem}`}>
          <img src={logo} alt="Echlin do Brasil" className={styles.logo} />
          <p className={styles.tagline}>A confiança que atravessa gerações.</p>
          <div className={styles.social}>
            {social.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={styles.socialLink}
              >
                <SocialIcon id={item.id} size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className={`${styles.column} ${styles.animItem} ${styles.delay1}`}>
          <h3 className={styles.columnTitle}>Navegação</h3>
          <ul className={styles.list}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.column} ${styles.animItem} ${styles.delay2}`}>
          <h3 className={styles.columnTitle}>Contato</h3>
          <ul className={styles.list}>
            <li>
              <a href="tel:+5511930522296" className={styles.link}>
                <span className={styles.iconWrapper}>
                  <Phone size={18} strokeWidth={2} />
                </span>
                (11) 93052-2296
              </a>
            </li>
            <li>
              <a href="mailto:contato@echlinbrasil.com.br" className={styles.link}>
                <span className={styles.iconWrapper}>
                  <Mail size={18} strokeWidth={2} />
                </span>
                contato@echlinbrasil.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {year} Echlin do Brasil. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}