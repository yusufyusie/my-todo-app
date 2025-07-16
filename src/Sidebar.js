import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Todos</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
