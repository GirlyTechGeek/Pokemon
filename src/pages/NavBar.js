import '../App.css';
import React from 'react';

const NavBar = () => {
    return (
        <>
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
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
