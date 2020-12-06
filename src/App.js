
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import ProductPage from './components/ProductPage/ProductPage';


import NavBar from './components/NavBar/NavBar';

// import ProductPage from './components/ProductPage';

function App() {
  return (
    <div className="App">
       <NavBar/>
       <ProductPage/>
      <Router>
        <Switch>
          {/* <Route path= "ProductPage" component= {ProductPage}/> */}
          <Route exact path= "ProductPage" component= {ProductPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
