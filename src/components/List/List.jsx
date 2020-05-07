import React from 'react';
import { useCharacters, useStatus } from '../../hooks/ListProvider';
import stylesAlive from './ListAlive.css';
import stylesDead from './ListDead.css';

const List = () => {
  const characters = useCharacters();
  const status = useStatus();
  const styles = status === 'alive' ? stylesAlive : stylesDead;

  const characterNodes = characters.map(character => (
    <li key={character.id}>
      <h3>{character.name}</h3>
      <img src={character.image} />
      <p>{character.species}</p>
    </li>
  ));

  return (
    <ul className={styles.List}>
      {characterNodes}
    </ul>
  );
};

export default List;
