import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-user">
        <div className="sidebar-avatar">
          <img src="https://ui-avatars.com/api/?name=User&background=8d6748&color=fff&size=64" alt="User Avatar" />
        </div>
        <div className="sidebar-username">Your Name</div>
        <div className="sidebar-role">Student</div>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/todos">Todos</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <span>&copy; 2025 Mereb Technologies</span>
      </div>
    </aside>
  );
}

export default Sidebar;
