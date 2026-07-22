import { useState } from 'react';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { FormField } from '@/components/FormField/FormField';
import { Button } from '@/components/Button/Button';
import styles from './ContactForm.module.css';

const INITIAL_VALUES = { name: '', company: '', email: '', whatsapp: '' };

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

  if (!values.whatsapp.trim()) {
    errors.whatsapp = 'Informe seu WhatsApp.';
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus('idle');
      return;
    }

    setStatus('success');
    setValues(INITIAL_VALUES);
  }

  return (
    <section id="contato" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          eyebrow="Fale com a gente"
          title="Vamos conversar sobre a sua oficina ou distribuidora"
          description="Preencha o formulário e nossa equipe entra em contato para apresentar o portfólio Echlin."
        />

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <FormField
            label="Nome"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            required
            placeholder="Seu nome completo"
          />
          <FormField
            label="Empresa"
            name="company"
            value={values.company}
            onChange={handleChange}
            placeholder="Nome da sua oficina ou distribuidora"
          />
          <FormField
            label="E-mail"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            required
            placeholder="voce@email.com"
          />
          <FormField
            label="WhatsApp"
            name="whatsapp"
            type="tel"
            value={values.whatsapp}
            onChange={handleChange}
            error={errors.whatsapp}
            required
            placeholder="(11) 90000-0000"
          />

          <Button type="submit" variant="primary" className={styles.submit}>
            Enviar mensagem
          </Button>

          {status === 'success' ? (
            <p className={styles.success} role="status">
              Mensagem enviada com sucesso! Em breve entraremos em contato.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
