import React from 'react';
import PropTypes from 'prop-types';

const List = ({ characters }) => {
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

List.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default List;
