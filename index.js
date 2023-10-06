// // createElement(type, props, ...children)
// // children can array of React Elements or passed as arguments

// const heading = React.createElement(
//   'h1',
//   {
//     id: 'h1',
//     key: 'h1',
//   },
//   'Heading1'
// );
// const heading2 = React.createElement(
//   'h2',
//   {
//     id: 'h2',
//     key: 'h2',
//   },
//   'Heading2'
// );

// // const div = React.createElement(
// //   'div',
// //   {
// //     id: 'div',
// //     key: 'div',
// //   },
// //   [heading, heading2]
// // );

// const div = React.createElement(
//   'div',
//   {
//     id: 'div',
//     key: 'div',
//   },
//   heading,
//   heading2
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(div);

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
