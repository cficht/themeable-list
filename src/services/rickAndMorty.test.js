/* eslint-disable no-undef */
import { fetchCharacters } from './rickAndMorty';

describe('fetchCharacters service', () => {
  it('uses fetch to get artists', () => {
    global.fetch = () => Promise.resolve({
      json: () => Promise.resolve({ 
        results: [
          {
            id: 1,
            name: 'Rick Sanchez',
            species: 'Human',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          },
          {
            id: 2,
            name: 'Morty Smith',
            species: 'Human',
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
          },
          {
            id: 3,
            name: 'Summer Smith',
            species: 'Human',
            image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
          }
        ] })
    });

    return fetchCharacters('The')
      .then(res => {
        expect(res).toEqual([
          {
            id: 1,
            name: 'Rick Sanchez',
            species: 'Human',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          },
          {
            id: 2,
            name: 'Morty Smith',
            species: 'Human',
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
          },
          {
            id: 3,
            name: 'Summer Smith',
            species: 'Human',
            image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
          }
        ]);
      });
  });
});
