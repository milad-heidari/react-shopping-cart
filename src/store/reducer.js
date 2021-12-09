import actions from './actions'
const initState = {
    products:[],
}

const reducer = (state=initState,action)=>{

    let newState=state;

    switch (action.type) {
        case actions.GET_PRODUCTS_SUCCESS:
            newState = {...state,products:action.payload}
            break;
        case actions.GET_PRODUCTS_FAILED:
            
            break;
        default:
            break;
    }
    return newState
}

export default reducer;