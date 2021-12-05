import './App.css';
import Layout from '../hoc/Layouts/Layout';
import Checkout from './Checkout/Checkout';
import {Route,Switch} from "react-router-dom"
import Orders from './Orders/Orders';
import AddDoctor from './Doctor/AddDoctor/AddDoctor';
import Doctor from './Doctor/Doctor';
function App() {
  return (
    <div>
      <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/add/doctor" component={AddDoctor}/>
            <Route path="/doctors" component={Doctor}/>
            <Route path='/' exact component={Doctor}/>
          </Switch>
      </Layout>
    </div>
  );
}

export default App;
