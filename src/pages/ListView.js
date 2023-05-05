import '../App.css';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Endpoint from '../Components/Endpoint';

function ListView() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [pokeData, setPokeData] = useState([])
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nxtUrl, setNxtUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const btnRef = React.useRef()
  useEffect(() => {
    getPokemons();
  }, [url])

  const getPokemons = async() => {
   
   const res = await axios.get(url);
   setNxtUrl(res.data.next);
   setPrevUrl(res.data.previous);
   getPokemon(res.data.results);
   console.log(pokeData);
  };
  const getPokemon = async(res) =>{
    res.map(async(item) =>{
      const result = await axios.get(item.url);
      console.log(result.data);
      setPokeData(state => {
        state = [...state,result.data]
        state.sort((a,b)=>a.id> b.id? 1: -1)
        return state;
      })
    })
  }
  return (
    <div className="Listview">
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

        </DrawerContent>
      </Drawer>
      <nav className="shadow navbar navbar-expand-lg ">
        <div className="container-fluid ">
          <img className="navbar-brand" src={require('../assets/logo.png')} href="/" />
          <div className='pokebook1'>
            <span >Poké</span>
            <span style={{ 'color': '#E85382' }}>book</span>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span>
              <i className='fa fa-search'></i>
            </span>
          </button>
          <div className='collapse navbar-collapse ' id='navbarText'>
            <input className='nav-search'></input>
            {/* <input  type="color" class="form-control form-control-color" value="#E85382" title="Choose your color" /> */}
          </div>
        </div>
      </nav>
      <div className='bg-image'>

        <div className='container list-page'>
          <div className='row'>
          {pokeData && 
            pokeData.map((item, i) => 
            
            <div className='col-sm-3'>
          
              <div class="card border-light shadow poke" >
                <div class="card-body text-center" >
                  <div className='pokemon-bg'>
                    
                    <img className="pokemon-image" src={item.sprites.front_default} />
                  </div>
                  <div className='text-center'>
                  {/* <p class="card-text">Nam</p> */}

                    <p class="card-text">{item.name}</p>
                    {/* {item.types.map((i, index) =>
                    <div>
                  <span class="badge rounded-pill text-bg-light">{index[i].types}</span>
                    <span class="badge rounded-pill text-bg-light">Secondary</span>
                    </div>
                    )} */}
  
                  </div>
                  <div class="alert" role="alert" ref={btnRef} key={item.id} onClick={onOpen}>
                    <span style={{ 'float': 'left' }}>View Pokemon</span>
                    <i style={{ 'float': 'right' }} class="far fa-eye fa-eye"></i>
                  </div>
                </div>
              </div>
                
            </div>
          )}
          </div>
        </div>

      </div>

    </div>

  );
}

export default ListView;