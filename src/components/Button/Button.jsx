import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const VARIANT_CLASS = {
  primary: styles.primary,
  secondary: styles.secondary,
  outline: styles.outline,
  outlineLight: styles.outlineLight,
};

export function Button({
  children,
  variant = 'primary',
  href,
  to,
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  ...rest
}) {
  const classes = `${styles.button} ${VARIANT_CLASS[variant] ?? styles.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
