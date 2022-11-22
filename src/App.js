import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseListing from "./containers/CourseListing";
import Header from "./containers/Header";
import "./App.css";
import CourseDetails from "./containers/CourseDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={CourseListing} />
          <Route path="/course/:courseId" component={CourseDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
