import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from "./pages/SignIn";
import ProjectsBoard from "./pages/ProjectsBoard";
import StatusBoard from "./pages/StatusBoard";
import TasksBoard from "./pages/TasksBoard";
import EditProjectComponent from "./components/EditProjectComponent";
import ViewProjectTasks from "./components/ViewProjectTasks";
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
          <Route exact path="/api/projects">
            <ProjectsBoard /> 
        </Route>
         <Route exact path="/api/projects/:id">
            <EditProjectComponent /> 
          </Route>
          <Route exact path="/status">
            <StatusBoard />
          </Route>
          <Route exact path="/tasks">
            <TasksBoard />
        </Route>
         <Route exact path="/api/projects/:id/tasks">
            <ViewProjectTasks />
        </Route>
      </Switch>
    </div>
  );
}
