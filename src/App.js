import React from 'react'
import './App.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Exp } from './components/Experience/Exp.jsx';
import { Footer } from './components/Footer/Footer';
import {Header} from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Portfolio } from './components/portfolio/Portfolio';

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Exp/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
