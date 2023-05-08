import '../App.css';
import React, { useState } from 'react';
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Progress,
    DrawerFooter,
} from '@chakra-ui/react'
import axios from 'axios';
import { prominent } from 'color.js'


const Card = ({ pokemon, appear }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [data, setData] = useState([]);
    const [bg, setBg] = useState('');
    const handleOpen = (index) => {
        onOpen();
        getSimilarPokemon(index)
        setData(index)
    }

    const getSimilarPokemon = async (e) => {
        prominent(e.sprites?.other.dream_world.front_default, { amount: 4, format: 'hex' }).then(color => {
            setBg(color)
        })
    }

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='lg'>
                <DrawerOverlay />
                {(!data) ? "" : (
                    <DrawerContent>
                        <DrawerCloseButton />
                        <div style={{ backgroundImage: `linear-gradient(transparent,${bg[1]})` }} className="poke-gradient">
                            <img className="pokemon-image1" src={data.sprites?.other.dream_world.front_default} />
                        </div>
                        <div className='text-center '>
                            <p className="card-text1">{data.name}</p>
                            {data.types?.map((items) =>
                                <>
                                    <span className="badge rounded-pill badge " >{items.type.name}</span>
                                </>
                            )}
                        </div>
                        <Tabs variant='soft-rounded' className=' tab-color'>
                            <TabPanels className='tab-panel'>
                                <TabPanel>
                                    <h2 className='type-ablty'>About</h2>
                                    <div>
                                        <div>
                                            <span>Height</span>
                                            <span className='p'>{data.height}</span>
                                        </div>
                                        <div>
                                            <span>Weight</span>
                                            <span className='p'>{data.weight}</span>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6' >
                                                <span style={{ 'float': 'right' }}>Abilities</span>
                                            </div>
                                            <div className='col-6'>
                                                {data.abilities?.map((ability) =>
                                                    <span style={{ 'textAlign': 'left', 'fontWeight': 'bold' }}>
                                                        <li  > {ability.ability.name}</li>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <hr className='hrz-ln'></hr>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <h2 className='type-ablty'>Stats</h2>
                                    <div>
                                        {data.stats?.map((statistics) =>
                                            <div className='row'>
                                                <div className='col-4 stat-name' >
                                                    <span >{statistics.stat.name}</span>
                                                </div>
                                                {/* <div className='col-4'> */}
                                                    <div class="progress col-4" style={{'height': '3px','marginTop': '10px'}}>
                                                        <div class="progress-bar" role="progressbar" style={{'width': `${statistics.base_stat}%`, 'backgroundColor': `${appear}`,}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    {/* <Progress style={{ 'marginTop': '10px' }} value={statistics.base_stat} size='xs' colorScheme={appear} /> */}

                                                {/* </div> */}
                                                <div className='col-4' style={{ 'textAlign': 'left' }}>
                                                    <span>{statistics.base_stat}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <h2 className='type-ablty'>Similar</h2>
                                    <div className='container row'>
                                        {data.types?.map((item) =>
                                            <div className='col-sm-6' id='page'>

                                                <div className="card border-light shadow poke" key={item.id} >
                                                    <div className="card-body text-center" >
                                                        <div className='pokemon-bg'>
                                                            <img src={item.type.url} />
                                                        </div>
                                                        <h3>{item.type.name}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </TabPanel>
                            </TabPanels>
                            <div className='tb'>
                                <TabList className='tabs'>
                                    <Tab className='tab'>About</Tab>
                                    <Tab className='tab'>Stats</Tab>
                                    <Tab className='tab'>Similar</Tab>
                                </TabList>
                            </div>
                        </Tabs>
                        <DrawerFooter>
                        </DrawerFooter>
                    </DrawerContent>
                )}
            </Drawer>
            {pokemon &&
                pokemon.map((item) =>
                    <div className='col-sm-3' id='page'>
                        <div className="card border-light shadow poke" key={item.id}  >
                            <div className="card-body text-center" >
                                <div className='pokemon-bg'>

                                    <img className="pokemon-image" src={item.sprites.other.dream_world.front_default} />
                                </div>

                                <div className='text-center'>
                                    {/* <p class="card-text">Nam</p> */}
                                    <p className="card-text">{item.name}</p>
                                    {item.types.map((items) =>
                                        <>
                                            <span className="badge rounded-pill text-bg-light" style={{ 'marginRight': '10px' }}>{items.type.name}</span>
                                        </>
                                    )}
                                </div>
                                <div className="alert" style={{ 'backgroundColor': `${appear}` }} role="alert" ref={btnRef} onClick={() => handleOpen(item)}>
                                    <span style={{ 'float': 'left' }}>View Pokemon</span>
                                    <i style={{ 'float': 'right' }} className="far fa-eye fa-eye"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Card;
