import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';

createRoot(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);