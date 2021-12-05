import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/beers" element={<AllBeers />} exact></Route>
        <Route path="/random-beer" element={<RandomBeer />} exact></Route>
        <Route path="/new-beer" element={<NewBeer />} exact></Route>
      </Routes>
    </main>
  );
}

export default App;
