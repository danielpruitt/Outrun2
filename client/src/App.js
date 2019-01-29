import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import ParticlesTest from "./pages/Particle";
import BeerLog from "./pages/BeerLog";
import NoMatch from "./pages/NoMatch";
import Header from './Components/Header/header';
import './App.css';
const App = () =>
  <Router>
    <div>
    
        <Header />
        <Switch>
          {/* <PrivateRoute exact path="/" component={Main} /> */}
          <Route exact path="/tester" component={ParticlesTest} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/beerlog" component={BeerLog} />
          <Route component={NoMatch} />
        </Switch>
    </div>
  </Router>



export default App;
