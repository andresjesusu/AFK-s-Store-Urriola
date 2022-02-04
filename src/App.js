import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoPage from './components/NoPage';
import Layout from './components/Layout';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';



const App = () => {

  return (
  <BrowserRouter>
    <Routes>
     <Route exact path="/" element={ <Layout/>} >
     <Route index element={ <ItemListContainer greeting="Bienvenidos a AFK's Store Online!"/>} />
     <Route path="/product/:id" element={<ItemDetailContainer />} />
     <Route exact path="/carrito" element={ <Cart/>} />
     <Route exact path="*" element={ <NoPage/>} />
    </Route>
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
