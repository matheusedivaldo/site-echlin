import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navItems from '@/data/nav.json';
import { Button } from '@/components/Button/Button';
import logo from '@/assets/logo/logo-echlin.png';
import styles from './Header.module.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logoLink} onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="Echlin do Brasil" className={styles.logo} />
        </NavLink>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
              onClick={() => setIsMenuOpen(false)}
              end={item.path === '/'}
            >
              {item.label}
            </NavLink>
          ))}
          <Button to="/#contato" variant="primary" className={styles.ctaMobile}>
            Fale Conosco
          </Button>
        </nav>

        <div className={styles.actions}>
          <Button to="/#contato" variant="primary" className={styles.ctaDesktop}>
            Fale Conosco
          </Button>
          <button
            type="button"
            className={styles.menuToggle}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
