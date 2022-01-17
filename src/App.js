import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemList from './components/ItemListContainer';



function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <NavBar/>
      <ItemList/>
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
