import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchCharacters } from '../services/rickAndMorty';

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('alive');

  useEffect(() => {
    fetchCharacters(page, status)
      .then(characters => setCharacters(characters));
  }, [page, status]);

  const handlePage = (val) => {
    setPage(page + val);
  };

  const toggle = ({ target }) => {
    if(!target.checked) setStatus('dead');
    if(target.checked) setStatus('alive');
  };

  return (
    <ListContext.Provider value={{ characters, page, handlePage, status, toggle }}>
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

export const usePage = () => {
  const { page } = useContext(ListContext);
  return page;
};

export const useHandlePage = () => {
  const { handlePage } = useContext(ListContext);
  return handlePage;
};

export const useStatus = () => {
  const { status } = useContext(ListContext);
  return status;
};

export const useToggle = () => {
  const { toggle } = useContext(ListContext);
  return toggle;
};
