import { useState } from 'react';
import { Button } from '@/components/Button/Button';
import styles from './PlateSearch.module.css';

const PLATE_URL =
  import.meta.env.VITE_PLATE_SEARCH_URL ?? 'https://buscanarede.com.br/echlinbrasil/produtos';

const PLATE_REGEX = /^[A-Za-z]{3}[0-9][A-Za-z0-9][0-9]{2}$/;

export function PlateSearch() {
  const [plate, setPlate] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const clean = plate.replace(/[^A-Za-z0-9]/g, '');

    if (!PLATE_REGEX.test(clean)) {
      setError('Digite uma placa válida, ex.: ABC1D23');
      return;
    }

    setError('');
    window.open(`${PLATE_URL}?placa=${clean}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="busca-placa" className={styles.section}>
      <div className={styles.card}>
        <div className={styles.text}>
          <h2 className={styles.title}>Encontre todos os produtos Echlin pela placa</h2>
          <p className={styles.description}>
            Informe a placa do veículo e descubra na hora quais peças Echlin são compatíveis.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.inputGroup}>
            <label htmlFor="plate-input" className={styles.label}>
              Placa do veículo
            </label>
            <input
              id="plate-input"
              type="text"
              inputMode="text"
              maxLength={8}
              placeholder="ABC1D23"
              value={plate}
              onChange={(event) => setPlate(event.target.value.toUpperCase())}
              className={`${styles.input} ${error ? styles.inputError : ''}`}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? 'plate-error' : undefined}
            />
            {error ? (
              <span id="plate-error" className={styles.error} role="alert">
                {error}
              </span>
            ) : null}
          </div>
          <Button type="submit" variant="primary" className={styles.submit}>
            Buscar peças
          </Button>
        </form>
      </div>
    </section>
  );
}
