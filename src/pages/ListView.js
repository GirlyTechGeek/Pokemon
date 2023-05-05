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
  Stack,
  Badge,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Endpoint from '../Components/Endpoint';
import PokemonInfo from './PokemonInfo';

function ListView() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pageNumber, setPageNumber] = useState('8');
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [pokeData, setPokeData] = useState([])
  const [url, setUrl] = useState(`${Endpoint}pokemon/?limit=${pageNumber}`);
  const [nxtUrl, setNxtUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const btnRef = React.useRef()
  useEffect(() => {
 
    getPokemons();
  }, [url])

  const getPokemons = async () => {
    const res = await axios.get(url);
    setNxtUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    console.log(pokeData);
  };
  const nextPage = () =>{
    setPageNumber( page => {
      page = [ ...pageNumber, pageNumber + 2]
      console.log(pageNumber)
      return page;
    })
  }
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      console.log(result.data);
      setPokeData(state => {
        state = [...state, result.data]
        state.sort((a, b) => a.id > b.id ? 1 : -1)
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
          <Button onClick={()=> {nextPage()}}>update</Button>
          <div className='row'>
            {pokeData &&
              pokeData.map((item, i) =>
                <div className='col-sm-3' id='page'> 
                  <div class="card border-light shadow poke" key={item.id}  >
                    <div class="card-body text-center" >
                      <div className='pokemon-bg'>
                        <img className="pokemon-image" src={item.sprites.front_default} />
                      </div>
                      <div className='text-center'>
                        {/* <p class="card-text">Nam</p> */}
                        <p class="card-text">{item.name}</p>
                        {item.types.map((items) =>
                          <>
                            <span class="badge rounded-pill text-bg-light" style={{'marginRight':'10px'}}>{items.type.name}</span>
                          </>
                        )}
                      </div>
                      <div class="alert" role="alert" ref={btnRef} onClick={onOpen}>
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