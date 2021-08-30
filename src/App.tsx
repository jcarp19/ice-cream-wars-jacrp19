import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import AdDesigner from "./components/AdDesigner";
import Votes from "./components/Votes";
import Ad from "./components/Ad";

function App() {
  return (
    <div className="App">
        <Header user="Jim" />
        <div className="AdContainer">
          <Ad flavor="Chocolate" fontSize={30} darkTheme={true} />
          <Ad flavor="Vanilla" fontSize={30} darkTheme={false} />
          <Ad flavor="Strawberry" fontSize={30} darkTheme={true} />
        </div>
      <div className="ice-cream">
        <AdDesigner />
        <Votes />
      </div>
      
    </div>
  );
}

export default App;
