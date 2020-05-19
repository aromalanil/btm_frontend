import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { userLoggedState } from './Recoil/atom.js';
import { useRecoilValue } from 'recoil';

import ProtectedRoute from "./Components/ProtectedRoute";
import ChangePassword from "./Components/Pages/ChangePassword";
import SendMessage from "./Components/Pages/SendMessage.js";
import Dashboard from "./Components/Pages/Dashboard";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

import "./scss/app.scss";

function App() {

  const isUserLoggedIn = useRecoilValue(userLoggedState);

  return (

    <Router>
      <Nav/>
      <div className="app-content">
        <Switch>

          <Route path="/login" component={Login}/>

          <Route path="/register" component={Register} />

          <Route path="/changepassword" component={ChangePassword} />

          <Route path="/send:username" component={SendMessage} />

          <ProtectedRoute
            path="/dashboard"
            protectCondition={isUserLoggedIn}
            component={Dashboard}
          />

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
