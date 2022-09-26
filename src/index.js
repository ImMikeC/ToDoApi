import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS
import 'bootstrap/dist/js/bootstrap.bundle';

import App from './App';

const container = document.querySelector('#root');
ReactDOM.createRoot(container).render(<App />)