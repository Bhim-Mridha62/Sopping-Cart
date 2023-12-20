import React,{useEffect}  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Remove,setCart } from './Store/CartSlice';
import  styles from './Style/SoppingCartCart.module.css';
function ShoppingCartCart() {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(Remove(productId));
  };
    const Totalprice=()=>{
        return Products.reduce((Total,Products)=>Total+Products.price,0)
    }
    // useEffect(() => {
    //     const storedCart = localStorage.getItem('cart');
    //     if (storedCart) {
    //       dispatch(setCart(JSON.parse(storedCart)));
    //     }
    //   }, []);
    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(Products))
    }, [Products])
    
  return (      
    <div className={styles.cartContainer}>
    <h3 className={styles.cartHeader}>Cart</h3>
    <h3>Total Price: ₹{Totalprice()}</h3>
    <div className={styles.productsContainer}>
      {Products.map((product) => (
        <div className={styles.cartItem} key={product.id}>
          <img src={product.image} alt="Product" />
          <div className={styles.productDetails}>
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className={styles.removeButton} onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  );
}
export default ShoppingCartCart;
