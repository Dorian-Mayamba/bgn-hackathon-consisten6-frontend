import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import { Finance } from './components/Finance';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Chatbot } from './components/Chatbot';
import { Register } from './components/Register';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/finance' element={<Finance/>}/>
        <Route path= '/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/chatbot' element={<Chatbot/>}/>
      </Routes>
    </Router>
  );
}

export default App;
