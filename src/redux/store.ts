
import { AnyAction, combineReducers, createStore, Reducer } from "redux";
import { todo } from "./reducer/todo";

const rootReducer = combineReducers({
    todo: todo
})
const store = createStore(rootReducer)

export default store
