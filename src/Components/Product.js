import React from 'react';
import './../App.css';
import Shoes from './../shoes.json';
import {Link} from 'react-router-dom';
function Product() {
  return (
    <div>
        <h1>Welcome to Product</h1>

        <div className="productContainer">
            {Object.keys(Shoes).map((keyName,index) =>{
                const shoe = Shoes[keyName];
                return (
                <Link to={`product/${keyName}`} key={keyName} className="link">
                    <h4>{shoe.name}</h4>
                    <img src={shoe.img} height={150} />
                </Link>)
            })}
        </div>
    </div>
  );
}

export default Product;
