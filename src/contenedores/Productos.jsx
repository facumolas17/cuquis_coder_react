import React, { useEffect, useState } from 'react';

const Productos = () => {

    const [data, setData]=useState();

    useEffect(()=>{

        fetch('https://api.mercadolibre.com/sites/MLA/search?q=mate')
        .then(response => response.json())
        .then(response => setData(response.results))
        .catch(err => console.log(err))

        console.log(data);
    },[]);

    

  return (
    <>
            <h2>Productos:</h2>
    </>
  )
}

export default Productos;