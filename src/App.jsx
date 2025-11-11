import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Whiterose2_vrsmall from './assets/Whiterose2_vrsmall.png';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Footer from './Footer'
import Introduction from './introduction'
import Home from './home'
import Contract from './contract'



function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Router>
    <Header/>
      
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/introduction" element={<Introduction />}/>
          <Route path="/contract" element={<Contract />}/>
        </Routes>
      
     

      <Footer/>
      </Router>
    </>
  );
}

export default App
