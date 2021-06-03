import React from 'react';
import {BrowserRouter as Router, Switch, Route /*, Link*/} from 'react-router-dom';
import Homepage from './views/Homepage/Homepage.jsx';
import Samples from './views/Samples/Samples.jsx';
import About from './views/About/About.jsx';
import './App.scss';

const App = () =>{
    return(
       <Router>
           <Switch>
               <Route exact path="/" component={Homepage} />
               <Route path="/samples" component={Samples} />
               <Route path="/aboutme" component={About} />
           </Switch>
       </Router>
    )
}

export default App;