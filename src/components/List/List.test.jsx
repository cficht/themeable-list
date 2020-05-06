import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List component', () => {
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

  it('renders List', () => {
    const wrapper = shallow(<List 
      characters={chararcterTest}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
