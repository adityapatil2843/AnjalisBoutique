import React from 'react'
import { FaUser } from "react-icons/fa";
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
