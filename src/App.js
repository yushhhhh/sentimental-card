import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import ImageList from './ImageList';
import Select from './Select';
import './scss/Common.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Link to='/'>home</Link>
          <Link to='./Select'>Select</Link>
        </div>
        <Routes>
          <Route path='/' element={Select} />
          <Route path='/Select' element={Select} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
