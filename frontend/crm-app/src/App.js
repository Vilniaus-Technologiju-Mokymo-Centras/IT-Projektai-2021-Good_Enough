import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from "./pages/SignIn";
import ProjectsBoard from "./pages/ProjectsBoard";
import StatusBoard from "./pages/StatusBoard";
import TasksBoard from "./pages/TasksBoard";
import CreateProjectComponent from './components/CreateProjectComponent';
import ViewProjectComponent from './components/ViewProjectComponent';

//import axios from 'axios';

export default function App() {
  document.title = 'crm-app';
  //axios.defaults.withCredentials = true;
 
  return (
    <div>
        <Switch>
          <Route exact from="/">
            <SignIn />
          </Route>
          <Route exact path="/api/projects">
            <ProjectsBoard /> 
          </Route>
          <Route exact path="/api/status">
            <StatusBoard />
          </Route>
          <Route exact path="/api/tasks">
            <TasksBoard />
        </Route>
        <Route path = "/api/add-project/:id" component = {CreateProjectComponent}></Route>
        <Route path = "/api/view-project/:id" component = {ViewProjectComponent}></Route>

      </Switch>
    </div>
  );
}
