import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom"
import React from "react";
import Layout from '../hoc/Layouts/Layout';
import Doctor from './Doctor/Doctor';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/doctor-list" component={Doctor}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
