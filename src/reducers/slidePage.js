
const initValue = { 
    list: []
}


const slideReduce = (state = initValue,action) => {

    switch(action.type){
        case 'ADD_PAGE': {
            return {
                list: action.payload
            }
        }

        default : 
            return state;
    }
}

export default slideReduce;
