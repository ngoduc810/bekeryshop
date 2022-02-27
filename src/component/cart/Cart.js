import React, { useState } from 'react'
import './cart.scss'

function Cart() {
    const items = JSON.parse(localStorage.getItem('carts'))
    const [deleted, setDeleted] = useState(items)
    const handerDelete = (i) => {
        setDeleted( prev => {
            const newMeal = [...prev]
            newMeal.splice(i, 1)
            localStorage.setItem('carts', JSON.stringify(newMeal))
            return newMeal
        })
    }

    return (
    <div className='container-xxl'>
            {items.map((item, index) => (
                <div className='row cart'>
                    <div className='col-md-1 cart__item'>
                        {index + 1}
                    </div>
                    <div className='col-md-3 cart__item'>
                        <img className='cart__item-img' src={item.title.strMealThumb}></img>
                    </div>
                    <div className='col-md-2 cart__item'>
                        <h2 className=''>{item.title.strMeal}</h2>
                    </div>
                    <div className='col-md-2 cart__item'>
                        <h2 className=''>{item.title.strMeasure1}</h2>
                   
                    </div>
                    <div className='col-md-3 cart__item'>
                        <h2 className=''>{item.title.strTags}</h2>
                    </div>
                    <div className='col-md-1 cart__item'>
                        <i  
                            onClick={() => handerDelete(index)}
                            class="cart__delete fa fa-trash"></i>
                    </div>
                </div>
            ))}
    </div>
  )
}

export default Cart