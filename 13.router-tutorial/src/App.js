import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => (
  <div>
    <Route path="/" component={Home} exact={true} />
    <Route path="/about" component={About} />
  </div>
);

export default App;
