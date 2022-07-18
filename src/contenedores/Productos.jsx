import React, { useEffect, useState } from 'react';

const Productos = () => {

    const [data, setData]=useState([]);
    

    useEffect(()=>{

        fetch('https://api.mercadolibre.com/sites/MLA/search?q=mate')
        .then(response => response.json())
        .then(response => setData(response.results))
        .catch(err => console.log("error"))

        
    },[]);

    

  return (
    <>
            <h2>Productos:</h2>
            <ul>
            {   
                data.length > 0 ? (
                data.map((item) => {
                    return <li key={item.id}>{item.title}</li>;
                })
                ) : (
                <p>Cargando...</p>


                )}
            </ul>
    </>
  )
}

export default Productos;