import React from 'react'
import useDogs from '../hooks/useDogs';

function FavPage() {
  const {favorito} = useDogs();
  console.log(favorito);
  return (
    <div>{favorito}</div>
  )
}

export default FavPage