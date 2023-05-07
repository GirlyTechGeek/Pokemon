import '../App.css';
import React from 'react';
import { Spinner } from '@chakra-ui/react';

const Loader = () => {
  return (
    <div className='text-center spinner'>
      <Spinner
        thickness='3px'
        speed='0.65s'
        color='#E85382'
        size='xl'
      />
    </div>
  );
}

export default Loader;