import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import SchedulePage from './components/pages/SchedulePage';
import AddressPage from './components/pages/AddressPage';
import ErrorPage from './components/pages/ErrorPage';

const App = () => (
  <Switch className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/about" exact component={AboutPage} />
    <Route path="/contact" exact component={ContactPage} />
    <Route path="/schedule" exact component={SchedulePage} />
    <Route path="/address" exact component={AddressPage} />
    <Route exact component={ErrorPage} />
  </Switch>
)

export default App;
