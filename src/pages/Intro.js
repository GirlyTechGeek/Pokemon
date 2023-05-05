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
        <div class="search-bar-icon">
        </div>
        <div>
          <a style={{ 'color': 'black' }} href='list-view'>View all</a>
        </div>
      </div>

    </div>
  );
}

export default Intro;
