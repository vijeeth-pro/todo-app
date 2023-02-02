import { GETALL } from "../action"


export const todo = (state = {}, {type, payload}: any) => {
    switch (type) {
        case GETALL:
            return ({
                ...state,
                todo: payload
            })
        default:
            return state
    }
}