import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import BeerLog from "./pages/BeerLog";
import NoMatch from "./pages/NoMatch";
import Navbar from "./Components/Navbar/Navbar";
import './App.css';

const App = () =>
  <Router>
    <div>
      <Navbar/>
      <Switch>
        {/* <PrivateRoute exact path="/" component={Main} /> */}
        <Route exact path="/" component={Landing} />
        <Route exact path="/beerlog" component={BeerLog} />
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>



export default App;
