import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const linkStyle = {
  backgroundColor: 'skyblue',
  color: 'white',
  fontSize: '2rem',
  width: '100%',
  display: 'block',
  textAlign: 'center',
  padding: '.5rem 0 0 0',
};

export default function Header() {
  return (
    <Link style={linkStyle} to="/">
      <FaHome />
    </Link>
  );
}
