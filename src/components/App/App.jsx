import React from 'react';
import List from '../List/List';
import { ListProvider } from '../../hooks/ListProvider';
import Paging from '../Paging/Paging';
import Header from '../Header/Header';

export default function App() {
  return (
    <ListProvider>
      <Header />
      <List />
      <Paging />
    </ListProvider>
  );
}
