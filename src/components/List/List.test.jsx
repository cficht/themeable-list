import React from 'react';
import { shallow } from 'enzyme';
import List from './List';
import { ListProvider } from '../../hooks/ListProvider';

describe('List component', () => {
  it('renders List', () => {
    const wrapper = shallow(
      <ListProvider>
        <List />
      </ListProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
