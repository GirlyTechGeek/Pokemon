import '../App.css';
import React from 'react';

const PokemonInfo = ({data}) => {
  return (
    <div className="info">
     
{(!data)? "" : (
  <div>
  {data.types.map(item =>{
    <>
      <span className="badge rounded-pill text-bg-light">{item.type.name}</span>
                    <span className="badge rounded-pill text-bg-light">Secondary</span>
    </>
  })}
  </div>
)}
    </div>
  );
}

export default PokemonInfo;
