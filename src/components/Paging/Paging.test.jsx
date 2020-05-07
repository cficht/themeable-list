import React from 'react';
import { shallow } from 'enzyme';
import Paging from './Paging';
import { ListProvider } from '../../hooks/ListProvider';

describe('Paging component', () => {
  it('renders Paging', () => {
    const wrapper = shallow(
      <ListProvider>
        <Paging />
      </ListProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
