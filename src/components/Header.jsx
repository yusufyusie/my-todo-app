import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-title">My Todo App</div>
      <div className="header-actions">
        <span className="header-welcome">Welcome!</span>
      </div>
    </header>
  );
}

export default Header;
