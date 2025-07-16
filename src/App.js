
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './TodoApp.css';

function App() {
  // Layout Skeleton: Sidebar | Header | Main Container | Footer
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f7f7f7' }}>
      {/* Sidebar: standard width 220px */}
      <Sidebar />
      <div style={{ flex: 1, marginLeft: '220px', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Header: standard height 64px */}
        <div style={{ height: '64px' }}>
          <Header />
        </div>
        {/* Main Container: max-width 700px, centered */}
        <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '2rem 0' }}>
          <div className="app-container" style={{ maxWidth: '700px', width: '100%', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '2.5rem', minHeight: '350px', margin: '0 auto' }}>
            {/* Main Container Skeleton */}
          </div>
        </main>
        {/* Footer: standard height 56px */}
        <div style={{ height: '56px' }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
