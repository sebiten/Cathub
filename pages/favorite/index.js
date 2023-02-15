import React, { use, useContext } from 'react';
import FavPage from '../../components/FavPage';
import useDogs from '../../hooks/useDogs';

function FavoritesPage() {
  const { favorito } = useDogs();
 console.log(favorito);
  return (
    <h1>No finished yet</h1>
  );
}

export default FavoritesPage;
