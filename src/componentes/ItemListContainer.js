import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = () => {

  const onAdd=(cantidad)=>{
    console.log(`Se agregaron al carrito ${cantidad} unidades`);
  }

  return (
    <>  
      <ItemCount initial={1} stock={10} onAdd={onAdd} /> 
    </>
  )
}

export default ItemListContainer;