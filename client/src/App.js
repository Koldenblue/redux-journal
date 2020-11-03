import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home} />
      </Router>
    </div>
  );
}

export default App;
