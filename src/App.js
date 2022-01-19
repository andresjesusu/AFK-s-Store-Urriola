import {useState} from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemList from './components/ItemListContainer';
import ItemCount from './components/itemCount';




function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <NavBar/>
      <ItemList/>
      <ItemCount/>
      </header>
    </div>
  );
}

export default App;
