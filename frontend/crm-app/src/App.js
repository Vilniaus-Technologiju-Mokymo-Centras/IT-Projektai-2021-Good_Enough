import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from "./pages/SignIn";
import ProjectsBoard from "./pages/ProjectsBoard";
import StatusBoard from "./pages/StatusBoard";
import TasksBoard from "./pages/TasksBoard";

import axios from 'axios';

export default function App() {
  document.title = 'crm-app';
  axios.defaults.withCredentials = true;
 
  return (
    <div>
        <Switch>
          <Route exact from="/">
            <SignIn />
          </Route>
          <Route exact path="/projects">
            <ProjectsBoard /> 
          </Route>
          <Route exact path="/status">
            <StatusBoard />
          </Route>
          <Route exact path="/tasks">
            <TasksBoard />
        </Route>
      </Switch>
    </div>
  );
}
