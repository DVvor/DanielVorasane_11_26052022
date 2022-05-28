import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home/Home'
import Accomodation from './Pages/Accomodation/Accomodation'
import AboutPage from './Pages/AboutPage/AboutPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import Layout from './components/Layout/Layout';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Layout />}>
          <Route index element={<Home />} />
          <Route path='/accomodation/:id' element={<Accomodation />} /> 
          <Route path='/about' element={<AboutPage />} />
          <Route path='/*' element={<ErrorPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
