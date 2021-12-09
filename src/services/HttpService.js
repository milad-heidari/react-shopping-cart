import axios from 'axios'

class HttpService {
    constructor(){
        this.client = axios.create({
            baseURL:"https://fakestoreapi.com/"
        })
    }

    
    get(url,config=null){
        return this.client.get(url,config)
    }
}

export default HttpService;