import logo from './logo.svg';
import './App.css';
import { Component1 } from './component1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit  <code>src/App.js</code> and save to reload.
        </p>
        <Component1 name="izhar"/>
        <Component1 name="ido"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
