import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import actions from '../../store/actions'

function Products({getProducts}) {

    useEffect(() => {
        getProducts({url:'products'})
    },[])

    return (
        <div>
            products components
        </div>
    )
}

const mapDispatch = (dispatch)=>{
    return {
        getProducts:(payload)=>{
            dispatch({
                type:actions.GET_PRODUCTS,
                payload
            })
        }
    }
}


export default connect(null,mapDispatch)(Products)
