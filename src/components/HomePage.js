import React from 'react';
import HomeLink from './HomeLink';
import beersImage from '../assets/beers.png';
import newBeerImage from '../assets/new-beer.png';
import randomBeerImage from '../assets/random-beer.png';

export default function HomePage() {
  const description =
    'Ipsum et ipsum nisi consequat Lorem velit nulla anim cillum proident.';

  return (
    <div>
      <HomeLink
        to="/beers"
        title="All Beers"
        description={description}
        image={beersImage}
      />
      <HomeLink
        to="/beers/random"
        title="Random Beer"
        description={description}
        image={newBeerImage}
      />
      <HomeLink
        to="/new-beer"
        title="New Beer"
        description={description}
        image={randomBeerImage}
      />
    </div>
  );
}
