import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'

import HomePage from "./pages/HomePage";
import CoursePlan from "./pages/CoursePlan";
import Registration from "./pages/Registration";
import FreeClass from "./pages/FreeClass";

import AppRoute from "./components/AppRoute";

function App() {
    return (
        <div className="appheader">

     <BrowserRouter>

    <AppRoute/>

    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/courseplan" element={<CoursePlan />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/freeclass" element={<FreeClass />}></Route>
      </Routes>

    </BrowserRouter>

      </div>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

