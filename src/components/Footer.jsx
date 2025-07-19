import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">&copy; 2025 My Todo App &mdash; Empowering Productivity</div>
      <div className="footer-right">
        <a
          href="https://github.com/yusufyusie/my-todo-app/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Report an Issue on GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
