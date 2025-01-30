import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Instructions() {
  return (
    <div>
      <h2>Instructions</h2>
      <nav>
        <ul>
          <li>
            <Link to="linux-skills">Linux Skills</Link>
          </li>
          <li>
            <Link to="kali-top-10">Kali Top 10</Link>
          </li>
          <li>
            <Link to="windows-defense">Windows Defense</Link>
          </li>
          <li>
            <Link to="purple-team">Purple Team</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* This renders the child route component */}
    </div>
  );
}
