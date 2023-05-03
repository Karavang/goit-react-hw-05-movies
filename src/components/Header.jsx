import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <ul className="navbar-nav list-header">
          <li className="nav-item">
            <NavLink className="nav-link" to="/goit-react-hw-05-movies/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/goit-react-hw-05-movies/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
