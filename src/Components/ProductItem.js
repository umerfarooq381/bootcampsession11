import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';

function ProductItem() {
  let {id} = useParams();
  
  const shoe = Shoes[id];
  if(!shoe)
  return <h2>Product not found</h2>
  console.log(shoe);
  return (
    <div>
        <h1>Welcome to Product Item</h1>

        <div className="link">
                    <h4>{shoe.name}</h4>
                    <img src={shoe.img} height={1000} />
                </div>

    </div>
  );
}

export default ProductItem;
