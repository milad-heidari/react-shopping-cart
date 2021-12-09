import actions from './actions'
const initState = {
    products:[],
}

const reducer = (state=initState,action)=>{

    let newState;

    switch (action.type) {
        case actions.GET_PRODUCTS_SUCCESS:

            break;
        case actions.GET_PRODUCTS_FAILED:
            
            break;
        default:
            break;
    }

}

export default reducer;