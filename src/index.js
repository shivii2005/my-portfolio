// src/index.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Loader from './components/Loader';
import { BrowserRouter } from 'react-router-dom';

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <BrowserRouter><App /></BrowserRouter>}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
