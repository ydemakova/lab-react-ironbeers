import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function BeerDetailPage() {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    (async () => {
      const url = 'https://ih-beers-api2.herokuapp.com/beers/' + id;
      const res = await axios.get(url);
      setBeer(res.data);
    })();
  });

  if (beer) {
    return (
      <div className="beer-detail-page">
        <div className="image">
          <img src={beer.image_url} alt={beer.name} />
        </div>
        <h2>{beer.name}</h2>
        <div className="info">
          <p className="tagline">{beer.tagline}</p>
          <p className="first-brewed">First brewed: {beer.first_brewed}</p>
          <p className="attenuation-level">
            Attenuation level: {beer.attenuation_level}
          </p>
          <p className="description">{beer.description}</p>
          <p className="contributed-by">
            Contributed by: {beer.contributed_by}
          </p>
        </div>
      </div>
    );
  }

  return <h1>No beer found!</h1>;
}
