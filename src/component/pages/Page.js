import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './page.scss'

function Page() {
    const item = useSelector(state => state.slide.list)
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('carts')) ?? [])

    const handerClick = () => {
        setItems(prev => {
            const newMeal = [...prev, item]
            localStorage.setItem('carts', JSON.stringify(newMeal))
            return newMeal
        }
        )
        alert('suggest')
    }

  return (
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-md-4 col-12 page'>
                <div className='page__left'>
                    <img className='page__img' src={item.title.strMealThumb}></img>
                    <h2 className='page__name'>{item.title.strMeal}</h2>
                    <p>{item.title.strArea} Food</p>
                </div>
            </div>
            <div className='col-md-8 col-12 page__right'>
                <div className='row'>
                    <h2>{item.title.strMeal}</h2>
                    <p>{item.title.strInstructions}</p>
                </div>
                <div 
                        onClick={handerClick}
                        className='add__cart'>ADD TO CART</div>
                <Link to={'/cart'} className='go__cart'>Go to CART</Link>
                <Link to={'/'} className='go__menu'>Back To Main</Link>
            </div>
        </div>
    </div>
  )
}

export default Page