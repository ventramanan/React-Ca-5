import React from 'react'

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Allroutes from './Allroutes';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Allroutes/>
    </BrowserRouter>

    </div>
  )
}

export default App