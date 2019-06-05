import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route path="/" component={Home} exact />
    <Route path="/about" component={About} exact />
    <Route path="/contact" component={Contact} exact />
  </div>
);

export default App;
