import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe.skip('List component', () => {
  it('renders List', () => {
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
    const wrapper = shallow(<List />);
    expect(wrapper).toMatchSnapshot();
  });
});
