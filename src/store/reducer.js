import actions from './actions'
const initState = {
    products:[],
    cart:[],
    cartVisibility:false
}

const reducer = (state=initState,action)=>{

    let newState=state;

    switch (action.type) {
        case actions.GET_PRODUCTS_SUCCESS:
            newState = {...state,products:action.payload}
            break;
        case actions.GET_PRODUCTS_FAILED:
            
            break;
        case actions.ADD_TO_CART:
            newState= {...state,cart:[...state.cart,action.payload]}
            break;
        case actions.CHANGE_CART_VISIBILITY:
            if (state.cartVisibility === false) {
                newState= {...state,cartVisibility:true}
            }else {
                newState= {...state,cartVisibility:false}
            }
            break;
        default:
            break;
    }
    return newState
}

export default reducer;