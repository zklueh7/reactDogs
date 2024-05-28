import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import DogsList from './DogsList';
import DogDetail from './DogDetail';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="dogs" element={<DogsList/>}/>
          <Route path="/dogs/:name" element={<DogDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
