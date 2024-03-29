import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Pages/Home';
import Beige from './components/Pages/Beige';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/beige",
    element: <Beige></Beige>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
