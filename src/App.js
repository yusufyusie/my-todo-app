
import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Profile from './pages/Profile';
import './styles/TodoApp.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <div className="layout-root">
        <Sidebar />
        <div className="layout-main">
          <div className="layout-header">
            <Header />
          </div>
          <main className="layout-content">
            <div className="app-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todos" element={<Todos />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </div>
          </main>
          <div className="layout-footer">
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
// - Routing: BrowserRouter, Routes, and Route provide SPA navigation
// - Layout: Sidebar, Header, Main Container, Footer for a professional look
// - Scalability: Easy to add more pages, features, or navigation
// - Clean code: Comments explain logic, flow, and structure for learning and reference
