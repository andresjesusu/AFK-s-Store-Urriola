import {useState, useEffect} from 'react';
import ItemList from './ItemList';
import Loading from './Loading';
import './Loading.css'
import mario from "./mario.png";
import mario2 from "./mario2.png";
import { productListData } from "./ProductListData";
import { useParams } from "react-router-dom";


export const getFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      const product = productListData.find((product) => {
        return product.id;
      });
      resolve(product);
    }, 500)
  });
};

const ItemListContainer = () => {
  const { id } = useParams();
  const [product, setProductListData] = useState();
  useEffect(() => {
    getFetch(id).then((results) => {
      setProductListData(results);
    });
  }, [id]);

  return <div>
    {product ? <ItemList item={product} /> : <Loading />}
    <div className='bodyImagen'>
          <div>
         <img src={mario} alt="" />
         </div>
         <div>
         <img src={mario2} alt="" />
         </div>
         </div></div>;
    
};

export default ItemListContainer;

