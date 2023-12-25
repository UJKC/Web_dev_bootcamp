import React from 'react';
import ReactDOM from 'react-dom/client';

var name = "Ujwal"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="HI">
    <p>Your name: {name}</p>
  </div>
);