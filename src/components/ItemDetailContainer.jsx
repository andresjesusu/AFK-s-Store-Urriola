import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { productList } from "./ProductList";

export const getFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      const product = productList.find((product) => {
        return product.id === id;
      });
      resolve(product);
    }, 1000)
  });
};

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

// hacer un boton de volver para atras

  useEffect(() => {
    getFetch(id).then((results) => {
      setProduct(results);
    });
  }, [id]);

  return (
  <div>
    {product ? <CartProvider><ItemDetail item={product} /></CartProvider> : <Loading />}
    </div>
  )
};

export default ItemDetailContainer;
