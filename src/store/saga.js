import {takeLatest,put,all,call} from 'redux-saga/effects'
import actions from './actions'
import HttpService from '../services/HttpService'

const httpService = new HttpService()


const getProductsWorker = function*(action){

    try {

        const productsResult = yield call(()=>{
            return httpService.get(action.payload.url)
        })

        yield put({
            type:actions.GET_PRODUCTS_SUCCESS,
            payload:productsResult.data
        })

        // console.log('productsResult',productsResult)

    } catch (error) {
        console.error(error)
        yield put({
            type:actions.GET_PRODUCTS_FAILED,
            payload:error
        })
    }

}

const getProductsWatcher = function*(){
    yield takeLatest(actions.GET_PRODUCTS,getProductsWorker)
}







export default function* root(){
    yield all([
        getProductsWatcher()
    ])
}
