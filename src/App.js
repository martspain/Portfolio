import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './views/Homepage/Homepage.jsx';
import Samples from './views/Samples/Samples.jsx';
import About from './views/About/About.jsx';
import Pickle from './views/Samples/Examples/CssLab/Pickle.jsx';
import Calc from './views/Samples/Examples/Calculator/Calc.jsx';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/samples" component={Samples} />
        <Route path="/aboutme" component={About} />
        <Route path="/pickle" component={Pickle} />
        <Route path="/calculator" component={Calc} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Router>
  )
}

export default App;
