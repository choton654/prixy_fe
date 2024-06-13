import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Import your main App component
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
reportWebVitals();