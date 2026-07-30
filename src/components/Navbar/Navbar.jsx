import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo/logo.svg';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Catálogos', href: '#catalogos' },
  { label: 'Contato', href: '#contato' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <a href="tel:+5511930522296" className={styles.topBarItem}>
            <Phone size={14} strokeWidth={2.5} />
            (11) 93052-2296
          </a>
          <a href="mailto:contato@echlinbrasil.com.br" className={styles.topBarItem}>
            <Mail size={14} strokeWidth={2.5} />
            contato@echlinbrasil.com.br
          </a>
        </div>
      </div>

      <div className={styles.nav}>
        <div className={styles.navInner}>
          <a href="#inicio" className={styles.logoLink} onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Echlin do Brasil" className={styles.logo} />
          </a>

          <nav className={`${styles.links} ${isMenuOpen ? styles.linksOpen : ''}`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.link}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contato" className={styles.ctaMobile} onClick={() => setIsMenuOpen(false)}>
              Fale Conosco
            </a>
          </nav>

          <a href="#contato" className={styles.ctaDesktop}>
            Fale Conosco
            <ArrowRight size={18} strokeWidth={2.5} className={styles.ctaIcon} />
          </a>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <Menu className={`${styles.menuIcon} ${isMenuOpen ? styles.iconHidden : ''}`} />
            <X className={`${styles.menuIcon} ${styles.menuIconClose} ${isMenuOpen ? '' : styles.iconHidden}`} />
          </button>
        </div>
      </div>
    </header>
  );
}