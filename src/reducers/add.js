
const initValue = { 
    list: []
}


const searchReduce = (state = initValue,action) => {

    switch(action.type){
        case 'ADD_MEAL': {
            return {
                list: action.payload
            }
        }
        case 'ADD_MOUNT': {
            return {
                list: action.payload
            }
        }
        default : 
            return state;
    }
}

export default searchReduce;