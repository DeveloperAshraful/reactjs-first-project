import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/agency.css';
import { BrowserRouter } from "react-router-dom";
import Routerlist from './Router/Routerlist';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routerlist />
      </BrowserRouter>
    </div>
  );
}

export default App;
