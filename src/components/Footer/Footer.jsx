import { Link } from 'react-router-dom';
import company from '@/data/company.json';
import navItems from '@/data/nav.json';
import social from '@/data/social.json';
import { SocialIcon } from '@/components/SocialIcon/SocialIcon';
import { formatPhone } from '@/utils/formatPhone';
import logo from '@/assets/logo/logo-echlin.png';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src={logo} alt="Echlin do Brasil" className={styles.logo} />
          <p className={styles.tagline}>{company.tagline}</p>
          <div className={styles.socials}>
            {social.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={item.label}
              >
                <SocialIcon id={item.id} label={item.label} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Navegação</h3>
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Contato</h3>
          <ul className={styles.list}>
            <li>
              {company.address.street}, {company.address.district}
            </li>
            <li>
              {company.address.city} — {company.address.state}
            </li>
            <li>
              <a href={`tel:+55${company.phone}`} className={styles.link}>
                {formatPhone(company.phone)}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className={styles.link}>
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {year} {company.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
