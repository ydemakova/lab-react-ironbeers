import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeLink.css';

function HomeLink(props) {
  const { to, title, description, image } = props;

  return (
    <Link style={{ ...styles }} to={to}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
}

export default HomeLink;
