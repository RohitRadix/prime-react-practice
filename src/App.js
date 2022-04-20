import React from 'react';
import {  Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import NavBar from './components/NavBar';
import TableDemo from './components/TableDemo';



let App= ()=> {
  return (
    <>
    
      <NavBar/>
      <Routes>
        <Route path='/' element={<Navigate to={'/counter'}/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/greet' element={<Greet/>}/>
        <Route path='/table' element={<TableDemo/>}/>
      </Routes>
    </>
   
  );
}

export default App;
