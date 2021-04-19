import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

export default function App() {
  document.title = 'crm-app';
 
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact from="/">
            <SignIn />
          </Route>
          <Route path="/home">
            <Home />
             </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
