import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './componants/home';
import Nav from './componants/nav';
import Second from './componants/second';
import logo from './logo.svg';

// React hooks : 
export default function App() {
  
  return (
    <BrowserRouter>
    <Nav />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Second />} />
      
      </Routes>
       <div>
      <h1>this is footer</h1>
    </div>
    </BrowserRouter>
    
  )
  
}

 
