import React from 'react';
import List from '../List/List';
import { ListProvider } from '../../hooks/ListProvider';

export default function App() {
  return (
    <ListProvider>
      <List />
    </ListProvider>
  );
}
