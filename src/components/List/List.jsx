import React from 'react';
import { useCharacters } from '../../hooks/ListProvider';

const List = () => {
  const characters = useCharacters();
  
  const characterNodes = characters.map(character => (
    <li key={character.id}>
      <h3>{character.name}</h3>
      <img src={character.image} />
      <p>{character.status}</p>
      <p>{character.species}</p>
    </li>
  ));

  return (
    <ul>
      {characterNodes}
    </ul>
  );
};

export default List;
