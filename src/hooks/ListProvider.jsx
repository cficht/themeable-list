import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchCharacters } from '../services/rickAndMorty';

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCharacters(page)
      .then(characters => setCharacters(characters));
  }, [page]);

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
