import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../assets/logo.svg';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo-wrap">
        <img src={logo} alt="Brand Logo" className="sidebar-logo" />
      </div>
      <nav className="sidebar-nav-scroll">
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/todos">Todos</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
