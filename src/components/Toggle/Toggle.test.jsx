import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './Toggle';
import { ListProvider } from '../../hooks/ListProvider';

describe('Toggle component', () => {
  it('renders Toggle', () => {
    const wrapper = shallow(
      <ListProvider>
        <Toggle />
      </ListProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
