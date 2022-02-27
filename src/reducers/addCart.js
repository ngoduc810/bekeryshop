const initValue = { 
    list: []
}


const addCart = (state = initValue,action) => {

    switch(action.type){
        case 'ADD_CART': {
            const newMeal = [...state.list , action.payload ]
            return {
                ...state,
                list: newMeal
            }
        }

        default : 
            return state;
    }
}

export default addCart;
