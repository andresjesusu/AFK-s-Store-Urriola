import {useState, useEffect} from 'react';
import ItemList2 from './ItemList2';

const items = [{
name: "Super Mario Maker 2",
precio:11250,
stock: 5,
descripcion: "Con este juego de Mario vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer. Interactuá con otros jugadores. Podrás disfrutar de una experiencia inigualable, ya que te permite jugar con tus amistades y compartir momentos inolvidables. Diversión sin fronteras. Podrás compartir cada juego con personas de todo el mundo, ya que es posible conectarse de manera online.",
pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_757148-MLA40917205776_022020-O.webp",
Url2: "https://http2.mlstatic.com/resources/frontend/ft-extended-v00/assets/vectorial/default.svg",
detalles: "Plataforma: Nintendo Switch",
detalles2: "Es multijugador: Sí",
detalles3: "Tamaño del archivo: 2.8 GB",
detalles4: "Formato: Físico",
detalles5: "Es en línea: Sí"},

{name: "Super Mario 3D World",
precio:6800,
descripcion: "Con este juego de Mario vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer. Interactuá con otros jugadoresPodrás disfrutar de una experiencia inigualable.",
stock: 4,
pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_940603-MLA44886780516_022021-O.webp",
detalles: "Plataforma: Nintendo Switch",
detalles2: "Es multijugador: Sí",
detalles3: "Tamaño del archivo: 215 GB",
detalles4: "Formato: Físico",
detalles5: "Es en línea: Mo"},

{name: "Mario Party SuperStars",
precio:3200,
descripcion: "Con este juego de Mario vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer. Interactuá con otros jugadoresPodrás disfrutar de una experiencia inigualable.",
stock: 6,
pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_738842-MLA48119679478_112021-O.webp",
detalles: "Plataforma: Nintendo Switch",
detalles2: "Es multijugador: Sí",
detalles3: "Tamaño del archivo: 20 GB",
detalles4: "Formato: Físico",
detalles5: "Es en línea: Sí"},

{name: "Super Smash Bros  Ultimate",
precio:8200,
descripcion: "Con este juego de Mario vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer. Interactuá con otros jugadoresPodrás disfrutar de una experiencia inigualable.",
stock: 10,
pictureUrl: "https://www.cjs-cdkeys.com/product_images/img/o/17012.jpg",
detalles: "Plataforma: Nintendo Switch",
detalles2: "Es multijugador: Sí",
detalles3: "Tamaño del archivo: 8 GB",
detalles4: "Formato: Físico",
detalles5: "Es en línea: Sí"},

{name: "Zelda Link's Awakening",
precio:500,
descripcion: "Los juegos de la franquicia The Legend of Zelda marcaron un antes y después en el género de aventura. Convertite en Link para vencer a los villanos que hicieron de un pacífico reino un lugar inmerso en las tinieblas.",
stock: 20,
pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_968049-MLA40927047075_022020-O.webp",
detalles: "Plataforma: Nintendo Switch",
detalles2: "Es multijugador: Sí",
detalles3: "Tamaño del archivo: 30 GB",
detalles4: "Formato: Físico",
detalles5: "Es en línea: No"}

]

const ItemDetailContainer = ({greeting}) => {   
  
   const [products, setProducts] =useState([]);

   useEffect(() =>{

     let getItems = new Promise ((resolve, reject) => {

       setTimeout(() => {

       items.length ? resolve(items) : reject("error 404")

       }, 2000);
     });

     getItems.then((resolve) => {setProducts(resolve)})

   }, [])
   
   return(
    <div>
          <h1>{greeting}</h1>
          <ItemList2 items={products}/>
    </div>
   )

      
  
}

export default ItemDetailContainer;
