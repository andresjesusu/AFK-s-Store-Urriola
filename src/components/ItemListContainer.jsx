import {useState, useEffect} from 'react';
import ItemList from './ItemList';

const items = [{
name: "Super Mario Maker 2",

pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_757148-MLA40917205776_022020-O.webp"},

{name: "Super Mario 3D World",

pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_940603-MLA44886780516_022021-O.webp"},

{name: "Mario Party SuperStars",

pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_738842-MLA48119679478_112021-O.webp"},

{name: "Super Smash Bros  Ultimate",
pictureUrl: "https://www.cjs-cdkeys.com/product_images/img/o/17012.jpg"},

{name: "Zelda Link's Awakening",
pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_968049-MLA40927047075_022020-O.webp"}


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

