
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './TodoApp.css';
import './App.css';

function App() {
  // Layout Skeleton: Sidebar | Header | Main Container | Footer
  return (
    <div className="layout-root">
      <Sidebar />
      <div className="layout-main">
        <div className="layout-header">
          <Header />
        </div>
        <main className="layout-content">
          <div className="app-container">
            {/* Main Container Skeleton */}
          </div>
        </main>
        <div className="layout-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
