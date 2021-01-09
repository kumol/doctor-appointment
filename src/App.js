import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components';

function App() {
  return (
    <div className="App">
      <Index></Index>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="btn btn-secondary">click me</button>
      </header>

    </div>
  );
}

export default App;
