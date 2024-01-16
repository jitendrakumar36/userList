import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
       <App />
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
<Footer />
    </div>
  </React.StrictMode>
);



