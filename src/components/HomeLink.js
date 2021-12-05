import React from 'react';
import { Link } from 'react-router-dom';

function HomeLink(props) {
  const { to, title, description, image } = props;

  return (
    <Link className="home-link" to={to}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
}

export default HomeLink;
