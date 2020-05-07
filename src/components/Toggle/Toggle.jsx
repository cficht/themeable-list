import React from 'react';
import styles from './toggle.css';
import { useStatus, useToggle } from '../../hooks/ListProvider';

const Toggle = () => {
  const status = useStatus();
  const toggle = useToggle();

  return (
    <section className={styles.Toggle}>
      <span>DEAD</span>
      <input id="toggle" type="checkbox" checked={status === 'alive'} onChange={toggle} />
      <label htmlFor="toggle"></label>
      <span>ALIVE</span>
    </section>
  );
};

export default Toggle;
