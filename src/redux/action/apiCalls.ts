import { baseApi } from "../../helper/baseApi"


const GetallList = async () => {
    try {
        const res = await baseApi.get('/todo')
    
        console.log('res', res);
        
        return res.data
    } catch (e: any) {
        console.log('Error: ', e)

        if( e.code === "ERR_NETWORK"){
            return false
        }
    }
}

export { GetallList }