import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Testing ci/cd github actions</p>
        <a
          className="App-link"
          href="https://mate.com"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="learn-link"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
