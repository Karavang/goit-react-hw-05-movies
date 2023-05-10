import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <ul className="navbar-nav list-header">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};
