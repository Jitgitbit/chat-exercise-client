import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import EventFormContainer from "./components/Events/CreateEventContainer";
// import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Hello</div>
        {/* <Router>
          <nav>
            <Link to="/" style={{color: `lightgreen`}}>
              <li>HOME</li>
            </Link>
            <Link to="/signup" style={{color: `lightgreen`}}>
              <li>Sign up!</li>
            </Link>
            <Link to="/login" style={{color: `lightgreen`}}>
              <li>Login</li>
            </Link>
            <Link to="/events/new" style={{color: `lightgreen`}}>
              <li>Create Event</li>
            </Link>
          </nav>

          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/events/new" component={EventFormContainer} />
        </Router> */}
      </header>
    </div>
  );
}

export default App;
