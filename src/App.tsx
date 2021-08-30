import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import AdDesigner from "./components/AdDesigner";
import Votes from "./components/Votes";

function App() {
  return (
    <div className="App">
        <Header />
      <div className="ice-cream">
        <AdDesigner />
        <Votes />
      </div>
      
    </div>
  );
}

export default App;
