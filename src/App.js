import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import PlansPage from './components/pages/PlansPage';
import SchedulePage from './components/pages/SchedulePage';
import AboutPage from './components/pages/AboutPage';
import ClientAccountAdministration from './components/pages/ClientAccountAdministration';
import UpdateClientAccount from './components/pages/UpdateClientAccount';
import ViewClientAccount from './components/pages/ViewClientAccount';

import ErrorPage from './components/pages/ErrorPage';

const App = () => (
  <Switch className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/register" exact component={RegisterPage} />
    <Route path="/plans" exact component={PlansPage} />
    <Route path="/schedule" exact component={SchedulePage} />
    <Route path="/about" exact component={AboutPage} />
    <Route path="/clientAccountAdministration" exact component={ClientAccountAdministration} />
    <Route path="/updateClientAccount" exact component={UpdateClientAccount} />
    <Route path="/viewClientAccount" exact component={ViewClientAccount} />
    <Route exact component={ErrorPage} />
  </Switch>
)

export default App;
