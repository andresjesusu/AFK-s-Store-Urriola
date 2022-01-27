import {useState, useEffect} from 'react';
import ItemList from './ItemList';

const items = [{
name: "Super Mario Maker 2",
precio:11250,
stock: 5,
descripcion: "Diversión sin fronteras. Podrás compartir cada juego con personas de todo el mundo, ya que es posible conectarse de manera online.",
pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_757148-MLA40917205776_022020-O.webp"},

{name: "Super Mario 3D World",
precio:500,
descripcion: "Con este juego de Mario vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer. Interactuá con otros jugadoresPodrás disfrutar de una experiencia inigualable.",
stock: 2,
pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_940603-MLA44886780516_022021-O.webp"},

{name: "Mario Party",
precio:500,
descripcion: "Con este juego de Mario vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer. Interactuá con otros jugadoresPodrás disfrutar de una experiencia inigualable.",
stock: 2,
pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_738842-MLA48119679478_112021-O.webp"},

{name: "Super Smash Bros  Ultimate",
precio:500,
descripcion: "Con este juego de Mario vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer. Interactuá con otros jugadoresPodrás disfrutar de una experiencia inigualable.",
stock: 2,
pictureUrl: "https://www.cjs-cdkeys.com/product_images/img/o/17012.jpg"}


]

const ItemListContainer = ({greeting}) => {   
  
   const [products, setProducts] =useState([]);

   useEffect(() =>{

     let getItems = new Promise ((resolve, reject) => {

       setTimeout(() => {

       items && items.length ? resolve(items) : reject("error 404")

       }, 2000);
     });

     getItems.then((resolve) => {setProducts(resolve)})

   }, [])
   
   return(
    <div>
          <h1>{greeting}</h1>
          <ItemList items={products}/>
    </div>
   )

      
  
}

export default ItemListContainer;

