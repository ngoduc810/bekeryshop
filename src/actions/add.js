

export const addNewMeal = (meal) => {
    return {
        type: 'ADD_MEAL',
        payload: meal,
    }
}

export const addMount = (mount) => {
    return {
        type: 'ADD_MOUNT',
        payload: mount
    }
}

export const addPageMeal = (meal) => {
    return {
        type: 'ADD_PAGE',
        payload: meal,
    }
}

export const addCartMeal = (payload) => {
    return {
        type: 'ADD_CART',
        payload,
    }
}