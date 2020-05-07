import React from 'react';
import { usePage, useHandlePage, useCharacters } from '../../hooks/ListProvider';

const Paging = () => {
  const page = usePage();
  const handlePage = useHandlePage();
  const characters = useCharacters();
  
  return (
    <>
      <button onClick={() => handlePage(-1)} disabled={page === 1}>Previous</button>
      <button onClick={() => handlePage(1)} disabled={characters.length < 20}>Next</button>
    </>
  );
};

export default Paging;
