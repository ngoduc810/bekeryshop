import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.scss'

function Navigation() {
  return (
    <div className="navigation">
        <Link to={'/'} className="navigation__logo">
            <img src="assets/bakery.PNG" alt="Logo"></img>
        </Link>
        <a className="navigation__item" href="">
            <i className="fa fa-gift"></i>
            <p>Gift List</p>
        </a>
        <a className="navigation__item" href="">
            <i className="fa fa-user-plus"></i>
            <p>Sign In</p>
        </a>
        <Link to={'/cart'} className="navigation__item" >
            <i className="fa fa-truck"></i>
            <p>My Orders</p>
        </Link>
        <Link to={'/cart'} className="navigation__item" >
            <i className="fa fa-cart-arrow-down"></i>
            <p>Cart</p>
        </Link>
    </div>
  )
}

export default Navigation