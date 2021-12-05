import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AllBeersPage from './components/AllBeersPage';
import BeerDetailPage from './components/BeerDetailPage';
import NewBeerPage from './components/NewBeerPage';
import Header from './components/Header';
import NotFoundPage from './components/NotFoundPage';
import { useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();

  return (
    <main>
      {pathname !== '/' && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} exact></Route>
        <Route path="/beers" element={<AllBeersPage />} exact></Route>
        <Route path="/beers/:id" element={<BeerDetailPage />} exact></Route>
        <Route path="/random-beer" element={<BeerDetailPage />} exact></Route>
        <Route path="/new-beer" element={<NewBeerPage />} exact></Route>
        <Route path="*" element={<NotFoundPage />} exact></Route>
      </Routes>
    </main>
  );
}

export default App;
