import '../App.css';

function Intro() {
  return (
    <div className="App">
      <div className='bg-image text-center'>
        <img className='logo' src={require('../assets/logo.png')} href="#" />
        <div className='pokebook'>
          <span >Poké</span>
          <span style={{ 'color': '#E85382' }}>book</span>
        </div>
        <h3 className='description'>Largest Pokemon index with information <br /> about every Pokemon you can think of.</h3>
        <input className='search-bar' placeholder='Enter pokemon name'></input>
        <div className="search-bar-icon">
        <i className='fa fa-search' style={{'paddingTop':'10px'}}></i>
        </div>
        <div>
          <a style={{ 'color': 'black','textDecorationLine':'underline' }} href='list-view'>View all</a>
        </div>
      </div>

    </div>
  );
}

export default Intro;
