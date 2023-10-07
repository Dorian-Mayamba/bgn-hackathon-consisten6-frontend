import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import { Finance } from './components/Finance';
import { Navbar } from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/finance' element={<Finance/>}/>
      </Routes>
    </Router>
  );
}

export default App;
