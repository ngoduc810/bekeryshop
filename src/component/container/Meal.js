import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addMount, addPageMeal } from '../../actions/add';
import './meal.scss';




function Meal () {
    const paginations = ['chicken','cake','soup','beef','pie','udon']
    const item = useSelector(state => state.add.list)
    const [meal,setMeal] = useState('')
    const [type,setType] = useState([])
    const isToggle = null
    const [toggle, setToggle] = useState(isToggle)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then(res => res.json())
        .then(data => setType(data.meals))
    },[meal]);

    const handerSubmit = (i) => {
            const newMeal = {
                title: i,
            }
                // dispatch
            const action = addPageMeal(newMeal);
            dispatch(action);
        }
    return (
        <div className='container-xxl'>
            {!item.title &&
            <div className='pagination row g-5 g-xs-1'>
                {paginations.map((item,index) => (
                    <button 
                        key={index} 
                        onClick={() => {
                            setToggle(index)
                            setMeal(`${item}`)}}
                        className='col-md-2 col-sm-4 col-6'>
                            <div className={`chooseMeal ${toggle === index && 'active'}`} >{`${item}`.toUpperCase()}</div></button>   
                ))}
            </div>
            }
            <div className='meal__list row g-5'>
                {(!item.title) ?
                type.map((item, index)=> (
                    <Link to={'/page'} className='meal__item col-md-4 col-sm-6 col-xs-4' key={index}
                        onClick={() => handerSubmit(item)}
                    >
                    <div className='meal__title'>
                        <img src={item.strMealThumb}></img>
                        <h2>{item.strMeal}</h2>
                        <p>{item.strArea} Food</p>
                        <div className='meal__content'>
                            <p>{item.strInstructions}</p>
                            <img src={item.strMealThumb}></img>
                            <a href={item.strYoutube}>Youtobe</a>
                        </div>
                    </div>
                    </Link>
                ))
                : item.title.map((item,index) => (

                <Link to={'/page'} className='meal__item col-4' key={index} 
                    onClick={() => handerSubmit(item)}
                    
                >
                    <div className='meal__title'>
                        <img src={item.strMealThumb}></img>
                        <h2>{item.strMeal}</h2>
                        <p>{item.strArea} Food</p>
                        <div className='meal__content'>
                            <p>{item.strInstructions}</p>
                            <img src={item.strMealThumb}></img>
                            <a href={item.strYoutube}>Youtobe</a>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        </div>
        )
    }

export default Meal
