import { useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';
import social from '@/data/social.json';
import { SocialIcon } from '@/components/SocialIcon/SocialIcon';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import styles from './Contact.module.css';

const INITIAL_VALUES = { name: '', company: '', email: '', phone: '', message: '' };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Informe seu nome.';
  }

  if (!values.email.trim()) {
    errors.email = 'Informe seu e-mail.';
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = 'Informe um e-mail válido.';
  }

  if (!values.message.trim()) {
    errors.message = 'Escreva uma mensagem.';
  }

  return errors;
}

function buildMailtoUrl(values) {
  const subject = `Contato via site — ${values.name}`;
  const bodyLines = [
    values.company && `Empresa: ${values.company}`,
    `E-mail: ${values.email}`,
    values.phone && `Telefone: ${values.phone}`,
    '',
    values.message,
  ].filter(Boolean);

  const params = new URLSearchParams({ subject, body: bodyLines.join('\n') });
  return `mailto:contato@echlinbrasil.com.br?${params.toString()}`;
}

export function Contact() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    window.location.href = buildMailtoUrl(values);
  }

  return (
    <section id="contato" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.info}>
          <span className={styles.eyebrow}>Fale com a gente</span>
          <h2 className={styles.title}>Vamos conversar sobre a sua oficina?</h2>
          <p className={styles.description}>
            Tire dúvidas, peça uma cotação ou converse com o time comercial. Respondemos rápido
            por qualquer um dos canais abaixo.
          </p>

          <ul className={styles.channels}>
            <li>
              <a href="tel:+5511930522296" className={styles.channel}>
                <Phone size={18} strokeWidth={2} />
                (11) 93052-2296
              </a>
            </li>
            <li>
              <a href="mailto:contato@echlinbrasil.com.br" className={styles.channel}>
                <Mail size={18} strokeWidth={2} />
                contato@echlinbrasil.com.br
              </a>
            </li>
          </ul>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <SocialIcon id="whatsapp" size={18} />
            Chamar no WhatsApp
          </a>

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
                <SocialIcon id={item.id} size={18} />
              </a>
            ))}
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="contact-name" className={styles.label}>
              Nome *
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              placeholder="Seu nome completo"
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-company" className={styles.label}>
              Empresa
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              value={values.company}
              onChange={handleChange}
              className={styles.input}
              placeholder="Nome da sua oficina ou distribuidora"
            />
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="contact-email" className={styles.label}>
                E-mail *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                placeholder="voce@email.com"
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-phone" className={styles.label}>
                Telefone
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                className={styles.input}
                placeholder="(11) 90000-0000"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-message" className={styles.label}>
              Mensagem *
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              className={`${styles.input} ${errors.message ? styles.inputError : ''}`}
              placeholder="Conte o que você precisa"
            />
            {errors.message && <span className={styles.error}>{errors.message}</span>}
          </div>

          <button type="submit" className={styles.submit}>
            Enviar mensagem
            <Send size={16} strokeWidth={2.5} />
          </button>
        </form>
      </div>
    </section>
  );
}
