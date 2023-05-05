import '../App.css';
import React from 'react';

const PokemonInfo = ({pokemon}) => {
  return (
    <div className="info">
     
{(!pokemon)? "" : (
  <div>
  {pokemon.types.map(item =>{
    <>
      <span class="badge rounded-pill text-bg-light">{item.type.name}</span>
                    <span class="badge rounded-pill text-bg-light">Secondary</span>
    </>
  })}
  </div>
)}
    </div>
  );
}

export default PokemonInfo;
