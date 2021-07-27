import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header.js';
import Home from '../component/Home.js';
import Favlist from './Favlist';
import CoffeeCard from '../component/CoffeeCard.js';
import axios from 'axios';

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home/>
        <Favlist/>
        <CoffeeCard/>
      </div>
    )
  }
}

export default App

