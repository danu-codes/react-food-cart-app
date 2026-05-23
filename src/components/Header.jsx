import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = ({cart}) => {
    return (
        <header className="header">
            <div className="logo">Food Cart</div>

            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/cart"><span className='cart-count'>{cart.length}</span>View Cart</Link>
                </li>
            </ul>
        </header>
    )
}