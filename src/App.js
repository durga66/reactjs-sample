import React from 'react';
import './App.css';
import './components/Header/header.css';
import {Header} from './components/Header/header';
import {Footer} from './components/Footer/footer'
function App() {
  return (
    <div className="container">
  <Header/>
  <Footer/>
  </div>
  );
  
}

export default App;
