import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo/logo.svg';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Produtos', to: '/produtos' },
  { label: 'Catálogos', to: '/catalogos' },
  { label: 'Contato', to: '/contato' },
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
          <Link to="/" className={styles.logoLink} onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Echlin do Brasil" className={styles.logo} />
          </Link>

          <nav className={`${styles.links} ${isMenuOpen ? styles.linksOpen : ''}`}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={styles.link}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contato" className={styles.ctaMobile} onClick={() => setIsMenuOpen(false)}>
              Fale Conosco
            </Link>
          </nav>

          <Link to="/contato" className={styles.ctaDesktop}>
            Fale Conosco
            <ArrowRight size={18} strokeWidth={2.5} className={styles.ctaIcon} />
          </Link>

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