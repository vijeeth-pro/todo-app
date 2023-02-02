import axios from "axios";

const baseApi = axios.create({
    baseURL: "http://192.168.29.139:4000"
})

export {baseApi}