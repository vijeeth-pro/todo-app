import axios from "axios";

const baseApi = axios.create({
    baseURL: "https://todo-backend-lovat.vercel.app"
})

export {baseApi}