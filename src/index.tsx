import React from 'react';
import ReactDOM from 'react-dom/client'; // Important: Use 'react-dom/client' for React 18
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // React 18 API
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
