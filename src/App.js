import React from 'react';
import './App.css';
import Container from './Container';
import StudentPage from './StudentPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <header className="App-header">
          Student Dashboard
      </header>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/StudentPage">Students</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/StudentPage">
            <StudentPage />
          </Route>
          <Route path="/">
            <Container />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
