import '../App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Endpoint from '../Components/Endpoint';
import NavBar from './NavBar';
import Loader from './Loader';
import Card from './Card';

function ListView() {
  const [number, setNumber] = useState('8');
  const [pageNumber, setPageNumber] = React.useState('8');
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = React.useState(`${Endpoint}pokemon/?limit=${pageNumber}`);
  const [nxtUrl, setNxtUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [getColor, setGetColor] = useState('#E85382');
 
  useEffect(() => {
    getPokemons();
  }, [url])

  const getPokemons = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNxtUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const colored = (navData) =>{
    setGetColor(navData)
    console.log(getColor)
  }
  const handleChange = async (event) => {
    setPageNumber(event.target.value);
    setPokeData([])
    const res = await axios.get(`${Endpoint}pokemon/?limit=${event.target.value}`);
    // setUrl(res)
    await getPokemon(res.data.results);
    setNxtUrl(res.data.next);
    setPrevUrl(res.data.previous);
   

  };
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      // console.log(result.data);
      setPokeData(state => {
        state = [...state, result.data]
        state.sort((a, b) => a.id > b.id ? 1 : -1);
        return state;
      })
    })
  }


  return (
    <div className="Listview">

      <NavBar colored={colored}></NavBar>
      <div className='bg-image'>
        {loading ? <Loader></Loader> :
          <div className='container list-page'>
            {/* <PokemonInfo data={pokemonInfo}></PokemonInfo> */}
            <div className='row'>
              <Card appear={getColor} pokemon={pokeData} infoPokemon={poke => setPokemonInfo(poke)}></Card>

              <div className='row'>
                <div className='col-10'>
                  <div className="btn-group ">
                    {prevUrl && <button className='next-btn' onClick={() => {
                      setPokeData([])
                      setUrl(prevUrl)
                    }}><i className='fas fa-arrow-left'></i></button>}

                    {nxtUrl && <button className='next-btn' style={{ 'marginLeft': '20px' }} onClick={() => {
                      setPokeData([])
                      setUrl(nxtUrl)
                    }}><i className='fas fa-arrow-right'></i></button>}

                  </div>
                </div>
                <div className='col-2'>
                  <select className="form-select-sm page-option" value={pageNumber} onChange={handleChange}>
                    <option  value="8">8</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                    <option value="24">24</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        }
      </div>

    </div>

  );
}

export default ListView;