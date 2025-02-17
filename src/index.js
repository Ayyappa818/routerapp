import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Enfield from './Enfield';
import Countrys from './country';
import Countrydetails from './countrydetails';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
          path: "enf",
          element: <Enfield></Enfield>
        },
        {
          path: "cou",
          element: <Countrys></Countrys>,
          children:[
            {
              path: "countrydet/:cname",
              element: <Countrydetails></Countrydetails>
            },
          ]
        },
      ]
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <RouterProvider router={router}><App></App></RouterProvider>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
