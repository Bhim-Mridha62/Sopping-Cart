import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Add } from './Store/CartSlice';
import './Style/SoppingCartProduct.css'
function SoppingCartProduct() {
    const dispatch=useDispatch();
    const [Product, setProduct] = useState([]);
    useEffect(() => {
        const Fetchproduct = () => {
            axios.get(`https://fakestoreapi.com/products`)
                .then((res) => {
                    console.log(res.data);
                    setProduct(res.data)
                })
        }
        Fetchproduct()
    }, [])
    const HandelAdd=(Product)=>{
        dispatch(Add(Product));
    }
    return (
        <div className="product-container">
        {Product.map((Product) => (
          <div className="card" key={Product.id}>
            <img src={Product.image} alt="product_image" style={{ height: '80px' }} />
            <h4>{Product.title}</h4>
            <h5>{Product.price}</h5>
            <button onClick={() => HandelAdd(Product)}>Add to cart</button>
          </div>
        ))}
      </div>
      
    )
}

export default SoppingCartProduct