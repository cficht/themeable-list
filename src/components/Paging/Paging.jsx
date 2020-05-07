import React from 'react';
import { usePage, useHandlePage, useCharacters, useStatus } from '../../hooks/ListProvider';
import stylesAlive from './PagingAlive.css';
import stylesDead from './PagingDead.css';

const Paging = () => {
  const page = usePage();
  const handlePage = useHandlePage();
  const characters = useCharacters();
  const status = useStatus();
  const styles = status === 'alive' ? stylesAlive : stylesDead;
  
  return (
    <footer className={styles.Paging}>
      <button onClick={() => handlePage(-1)} disabled={page === 1}>Previous</button>
      <button onClick={() => handlePage(1)} disabled={characters.length < 20}>Next</button>
    </footer>
  );
};

export default Paging;
