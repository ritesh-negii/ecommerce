import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { RouterProvider} from "react-router-dom"
import router from './Routes';
import App from './App';
import './index.css';
import './style.css';


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);