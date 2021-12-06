import React from 'react';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import { Outlet } from 'react-router-dom'
import POPOSDetails from './POPOSDetails'
import Footer from './Footer.js'

function App() {
  return (
    <div className="App">
      <Title/>
      <Outlet/>
      <Footer/>
    </div>
  );
}


export default App;
