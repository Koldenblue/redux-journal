import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Home from './components/Home';
import Journal from "./components/Journal";

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path='/' component={() => {
          return (<>
            <Home />
            <Journal />
          </>)
        }} />

      </Router>
    </div>
  );
}

export default App;
