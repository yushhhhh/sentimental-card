import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Main from './Main';
import Header from './Header';
import Select from './Select';
import './scss/Common.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Link to='/'>Main</Link>
          <Link to='./Select'>Select</Link>
        </div>
        <Routes>
          <Route path='/Main' element={<Main />} />
          <Route path='/Select' element={<Select />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
