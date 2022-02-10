import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Main from './Main';
//import Header from './Header';
import Select from './Select';
import './scss/Common.scss';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <header className='header'>
            <div>
              <img src='assets/images/main/logo.png' />
            </div>
            <nav className='nav'>
              <ul className='nav-list'>
                <li className='item'>
                  <Link className='link' to='/'>
                    Home
                  </Link>
                </li>
                <li className='item'>
                  <Link className='link' to='./Select'>
                    Make Card
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Select' element={<Select />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
