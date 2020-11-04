import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Home from './components/Home';
import Journal from "./components/Journal";
import ReducerHook from './components/ReducerHook';

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path='/' component={() => {
          return (<>
            <ReducerHook />
            <Home />
            <Journal />
          </>)
        }} />

      </Router>
    </div>
  );
}

export default App;
