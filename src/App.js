import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import CourseListing from "./containers/CourseListing";
import Header from "./containers/Header";
import "./App.css";
import CourseDetails from "./containers/CourseDetails";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={CourseListing} />
          <Route path="/course/:courseId" component={CourseDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
