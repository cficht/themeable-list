export const fetchCharacters = (page, status) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}&status=${status}`)
    .then(res => res.json())
    .then(res => res.results.map(character => ({
      id: character.id,
      name: character.name,
      species: character.species,
      image: character.image
    })));
};
