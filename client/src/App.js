import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Home from './components/Home';
import Journal from "./components/Journal";
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path='/' component={() => {
          return (<>
            <Home />
          </>)
        }} />

      </Router>
    </div>
  );
}

export default App;
