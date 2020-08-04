import React from "react";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/register" component={Signup} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
