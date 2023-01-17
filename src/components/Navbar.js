import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
}
