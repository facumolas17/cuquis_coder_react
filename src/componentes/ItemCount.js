import React from 'react';
import { useState } from 'react';
import ItemListContainer from './ItemListContainer';

const ItemCount = ({initial,stock,onAdd}) => {

    const [cont,setCont]= useState(initial);

    const restar = ()=> {
        setCont(cont-1);
    }
    const sumar = ()=>{
        setCont(cont+1);
    }

  return (
    <>
        
    <button disabled={cont<=1} onClick={restar}>-</button>
        <span>{cont}</span>
        <button disabled={cont>=stock} onClick={sumar}>+</button>
        <div>
            <button disabled={stock <= 0} onClick={()=> onAdd(cont)}>Agregar</button>
        </div>
      
    </>
  )
}

export default ItemCount;