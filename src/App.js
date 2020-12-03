
import React from 'react';
import './App.css';
import LandingPage from './components/Landingpage/Landingpage';
import NavBar from './components/NavBar/NavBar';
// import LandingPage from './components/Landingpage';

function App() {
  return (
    <div className="App">
       <NavBar/>
      <LandingPage />
    </div>
  );
}

export default App;
