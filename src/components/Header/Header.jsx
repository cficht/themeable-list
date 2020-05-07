import React from 'react';
import Toggle from '../Toggle/Toggle';
import { useStatus } from '../../hooks/ListProvider';
import stylesAlive from './HeaderAlive.css';
import stylesDead from './HeaderDead.css';

const Header = () => {
  const status = useStatus();
  const styles = status === 'alive' ? stylesAlive : stylesDead;

  return (
    <header className={styles.Header}>
      <h1>Rick and Morty</h1>
      <Toggle />
    </header>
  );
};

export default Header;
