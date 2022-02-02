import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import NoPage from './components/NoPage';
import Layout from './components/Layout';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';



const App = () => {

  return (
  <BrowserRouter>
    <Routes>
     <Route path="/" element={ <Layout/>} >
     <Route index element={ <Home/>} />
     <Route path="/itemD" element={ <ItemDetailContainer/>} />
     <Route path="/carrito" element={ <Cart/>} />
     <Route path="*" element={ <NoPage/>} />
    </Route>
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
