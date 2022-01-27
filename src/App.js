import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer';



function App() {

  return (
    
    <div className="App">
    
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a AFK's Store Online!"/>
      
    </div>
  );
}

export default App;
