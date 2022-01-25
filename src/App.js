import {useState} from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemList from './components/ItemListContainer';
import Product from './components/itemCount';




function App() {

  const [products, setProducts] =useState([
    {name:"Zelda", precio:200, stock:2},
    {name: "lol", precio:800, stock:3}


  ])
  return (
    
    <div className="App">
      <header className="App-header">
      <NavBar/>
      <ItemList/>
      <div style={{ marginBottom: 10}}> 
       {products.map(product => { return <Product name={product.name} precio={product.precio} stock={product.stock}/>})}
       </div>
      
      </header>
    </div>
  );
}

export default App;
