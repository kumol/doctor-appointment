import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from '../components';
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom"
import Home from '../components/Layout/Home';
import About from '../components/Layout/About';
import React from "react";
import Contact from '../components/Contact';
import DoctorList from '../components/Doctor/DoctorList';
import AddDoctor from '../components/Doctor/AddDoctor';
import AddOrganization from '../components/Organization/AddOrganization';
import Organizations from '../components/Organization/Organizations'
function App() {
  return (
    <div className="App">
      <Router>
      <Index></Index>
      <div className="container"> 
      <Switch >
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/doctor" component={DoctorList}></Route>
        <Route exact path="/doctor/new" component={AddDoctor}></Route>
        <Route exact path="/organization" component={ Organizations}></Route>
        <Route exact path="/organization/new" component={AddOrganization}></Route>

      </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
