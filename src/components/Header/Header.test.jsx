import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { ListProvider } from '../../hooks/ListProvider';

describe('Header component', () => {
  it('renders Header', () => {
    const wrapper = shallow(
      <ListProvider>
        <Header />
      </ListProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
