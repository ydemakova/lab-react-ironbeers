import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Beer from './Beer';

export default function AllBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
      setBeers(res.data);
    })();
  }, []);

  return (
    <div>
      {beers.map((beer) => (
        <Beer
          key={beer._id}
          to={`/beers/${beer._id}`}
          imageUrl={beer.image_url}
          name={beer.name}
          tagline={beer.tagline}
          contributedBy={beer.contributed_by}
        />
      ))}
    </div>
  );
}
