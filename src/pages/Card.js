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
} from '@chakra-ui/react'

const Card = ({ pokemon }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [data, setData] = useState([])
    const handleOpen = (index) => {
        onOpen();
        setData(index)
        console.log(index)
    }
    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='lg'
            >
                <DrawerOverlay />
                {(!data) ? "" : (
                    <DrawerContent>
                        <DrawerCloseButton />

                        <div>
                            <p>{data.base_experience}</p>
                            <div className='poke-gradient'>
                                <img className="pokemon-image" src={data.sprites?.front_default} />
                            </div>
                            <div className='text-center'>
                                {/* <p class="card-text">Nam</p> */}
                                <p className="card-text">{data.name}</p>
                                {/* {data.types.map((items) =>
                                <>
                                  <span className="badge rounded-pill text-bg-light" style={{ 'marginRight': '10px' }}>{items.type.name}</span>
                                </>
                              )} */}
                            </div>

                            <Tabs variant='soft-rounded' colorScheme='gray'>

                                <TabPanels className='tab-panel'>
                                    <TabPanel>
                                        <h2>About</h2>
                                        <div>
                                            <div>
                                                <span>Height</span>
                                               
                                                <span className='p'>{data.height}</span>
                                            </div>
                                            <div>
                                                <span>Weight</span>
                                                <span className='p'> {data.weight}</span>
                                            </div>
                                            <div>
                                                <span>Abilities</span>
                                                <span className='p'> {data.height}</span>
                                            </div>

                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <h2>Stats</h2>
                                        <div>
                                           {data.stats?.map((statistics) => 
                                          
                                          <div className='row'>
                                              <div className='col-4 stat-name' >
                                              <span >{statistics.stat.name}</span>
                                              </div>
                                              <div className='col-4'>
                                              <Progress style={{'marginTop':'10px'}}  value={statistics.base_stat} size='xs' colorScheme='pink' />

                                              </div>
                                              <div className='col-4'>
                                              <span>{statistics.base_stat}</span>

                                              </div>
                                         
                                 
                                          </div>
                                           )}

                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <h2>Similar</h2>
                                        <div>
                                            <div>
                                                <span>Height</span>
                                                <span>{data.height}</span>
                                            </div>
                                            <div>
                                                <span>Weight</span>
                                                <span> {data.weight}</span>
                                            </div>
                                            <div>
                                                <span>Abilities</span>
                                                <span> {data.height}</span>
                                            </div>

                                        </div>
                                    </TabPanel>
                                </TabPanels>
                                <TabList className='tabs'>
                                    <Tab className='tab'>About</Tab>
                                    <Tab className='tab'>Stats</Tab>
                                    <Tab className='tab'>Similar</Tab>
                                </TabList>
                            </Tabs>
                        </div>

                    </DrawerContent>
                )}
            </Drawer>
            {pokemon &&
                pokemon.map((item, i) =>
                    <div className='col-sm-3' id='page'>
                        <div className="card border-light shadow poke" key={item.id}  >
                            <div className="card-body text-center" >
                                <div className='pokemon-bg'>
                                    <img className="pokemon-image" src={item.sprites.front_default} />
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
                                <div className="alert" role="alert" ref={btnRef} onClick={() => handleOpen(item)}>
                                    <span style={{ 'float': 'left' }}>View Pokemon</span>
                                    <i style={{ 'float': 'right' }} className="far fa-eye fa-eye"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </>
    );
}

export default Card;
