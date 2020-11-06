import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Home from './components/Home';
import Journal from "./components/Journal";
import Menu from './components/Menu';
import AllEntries from "./components/AllEntries";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>

        <Route exact path='/' component={() => {
          return (<>
            <Home />
          </>)
        }} />
        <Route exact path='/all' component={AllEntries} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
