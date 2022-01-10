import logo from './logo.svg';
import './App.css';
import Header from './components/NavBar.jsx';
function App() {
  return (
    
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        AFK'S Store
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          AFK'S Store
        </a>
      </header>
    </div>
  );
}

export default App;
