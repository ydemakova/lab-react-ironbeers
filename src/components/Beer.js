import React from 'react';
import { Link } from 'react-router-dom';

function Beer({ to, imageUrl, name, tagline, contributedBy }) {
  return (
    <Link className="beer" to={to}>
      <div className="image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <p className="tagline">{tagline}</p>
        <p className="contributed-by">Created by: {contributedBy}</p>
      </div>
    </Link>
  );
}

export default Beer;
