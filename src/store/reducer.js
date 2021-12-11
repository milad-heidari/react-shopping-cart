import actions from './actions'
const initState = {
    products:[],
    cartItems:[],
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
            newState= {...state,cartItems:[...state.cartItems,action.payload]}
            break;
        case actions.CHANGE_CART_VISIBILITY:
            if (state.cartVisibility === false) {
                newState= {...state,cartVisibility:true}
            }else {
                newState= {...state,cartVisibility:false}
            }
            break;
        case actions.CHANGE_QUANTITY:
            newState = {
                ...state,
                cartItems:state.cartItems.map(item=>{
                    if (item.id === action.payload.id) {
                        return {
                            ...item,quantity:action.payload.quantity
                        }
                    }
                    return item
                })
            }
            break;
        default:
            break;
    }
    return newState
}

export default reducer;