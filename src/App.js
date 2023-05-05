import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Intro from './pages/Intro';
import ListView from './pages/ListView';

function App() {
  return (
    <div className="App">
  <Routes>
    <Route path="/" element={<Intro/>}/>
    <Route path="/list-view" element={<ListView/>}/>
  </Routes>

    </div>
  );
}

export default App;
