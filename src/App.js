
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import LandingPage from './components/Landingpage/Landingpage';
import Landingpage from './components/Landingpage/Landingpage';
import NavBar from './components/NavBar/NavBar';

// import LandingPage from './components/Landingpage';

function App() {
  return (
    <div className="App">
       <NavBar/>
       <LandingPage/>
      <Router>
        <Switch>
          {/* <Route path= "LandingPage" component= {Landingpage}/> */}
          <Route exact path= "LandingPage" component= {Landingpage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
