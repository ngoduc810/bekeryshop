import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addNewMeal } from "../../actions/add";
import './navbar.scss';


//  const [submit, setSubmit] = useState();


const Navbar = () => {
    const mealList = useSelector(state => state.add.list)
    const dispatch = useDispatch()

    const [item,setItem] = useState('')
    const [meal,setMeal] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        .then(res => res.json())
        .then(data => {
            setMeal(data.meals)
        })
    },[item]);


    const handerSubmit = () => {
        const newMeal = {
            title: meal,
        }
            // dispatch
        const action = addNewMeal(newMeal);
        dispatch(action);
        setItem('')
    }

    return (
        
        <div className="container-xxl">
            <nav nav className="logo d-flex justify justify-content-center">
                <Link to={'/'} className="logo__link">
                    <img src="assets/bakery.PNG" alt="Logo"></img>
                </Link>
            </nav>
            <div className="navbar row">
                <Link to={'/'} className="navbar__logo col-2">
                    <img src="assets/logo-2.svg"></img>
                </Link>
                <div className="navbar__input d-flex col-lg-6 col-md-9 col-xs-9">
                    <input className="navbar__input-search form-control me-2" type="search" placeholder="Enter food name..."  
                            value={item}
                            onChange = {(e)=>setItem(e.target.value)}
                    />
                    <button 
                            onClick={handerSubmit}
                            className="navbar__input-btn btn btn-outline-primary">Search</button>
                </div>
                <div className="navbar__list hide__on-tab col-4">
                    <a className="navbar__list-gift" href="">
                        <i className="fa fa-gift"></i>
                        <p>Gift List</p>
                    </a>
                    <a className="navbar__list-gift" href="">
                        <i className="fa fa-user-plus"></i>
                        <p>Sign In</p>
                    </a>
                    <Link to={'/cart'} className="navbar__list-gift" >
                        <i className="fa fa-truck"></i>
                        <p>My Orders</p>
                    </Link>
                    <Link to={'/cart'} className="navbar__list-gift" >
                        <i className="fa fa-cart-arrow-down"></i>
                        <p>Cart</p>
                    </Link>
                </div>
                <Link to={'/navigation'} className="navbar__tab col-1">
                    <i class="fa fa-list"></i>
                </Link>
            </div>
        </div>
    );
}


export default Navbar;
