import { cartContext } from '../App';
import './product.css'
import { useContext } from 'react';

export const Product = ({ product}) => {
    const {cart, setCart}=useContext(cartContext);
    const name = product.foodName.length > 21 ? product.foodName.substring(0, 20) + ".." : product.foodName;
    const isInCart = cart.some((item) => item.id === product.id);
    const addCart = () => { 
        setCart([...cart, product])
    };
    const removeCart = () => {
        setCart(cart.filter((cart)=>cart.id!==product.id))
     };

    return (
        <div className='product'>
            <div className="img"><img src={product.pic} alt={product.foodName} /></div>
            <div className="product-details">
                <h3>{name}</h3>
                <p>Price Rs:{product.amount}</p>

                {isInCart? (<button className='cart-btn remove-btn' onClick={removeCart}>Remove from cart</button>) :
                    <button className='cart-btn add-btn' onClick={addCart}>Add to cart</button>}
            </div>

        </div>
    )
}
