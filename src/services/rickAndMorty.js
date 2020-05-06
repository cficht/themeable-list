export const fetchCharacters = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(res => res.results.map(character => ({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      image: character.image
    })));
};
