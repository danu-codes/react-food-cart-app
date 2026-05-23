import React, { useEffect, useState, useContext } from 'react'
import './ViewCart.css'
import { cartContext } from '../App';

export const ViewCart = () => {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + parseInt(cur.amount), 0))
  }, [cart])

  const removeCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <>
      <h1 className='cart-title'>Cart Products</h1>
      <div className='cart-container'>
        {cart.map((product) => (
          <div className="cart-product">
            <img src={product.pic} alt={product.foodName} />
            <div className="cart-product-details">
              <h3>Product Name:{product.foodName}</h3>
              <p>Price Rs: {product.amount}</p>
            </div>
            <button onClick={() => removeCart(product.id)}>Delete</button>
          </div>
        ))}

        <h2 className='cart-total'>Total Rs: {total}</h2>
      </div>
    </>
  )
}
