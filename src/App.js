import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Results from "./components/Results";

function App() {
  return (
    <Router className="App">
      <Route exact path="/">
        <Results />
      </Route>
    </Router>
  );
}

export default App;
