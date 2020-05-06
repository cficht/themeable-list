import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  const chararcterTest = [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    },
    {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
    }
  ];

  useEffect(() => {
    setCharacters(chararcterTest);
  }, []);

  return (
    <ListContext.Provider value={{ characters }}>
      {children}
    </ListContext.Provider>
  );
};

ListProvider.propTypes = {
  children: PropTypes.node
};

export const useCharacters = () => {
  const { characters } = useContext(ListContext);
  return characters;
};
