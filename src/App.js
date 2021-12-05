import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/beers" element={<Home />} exact></Route>
        <Route path="/random-beer" element={<Home />} exact></Route>
        <Route path="/new-beer" element={<Home />} exact></Route>
      </Routes>
    </main>
  );
}

export default App;
