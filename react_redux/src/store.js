import { createStore } from "redux"
import mainReducer from "./reduces/mainReducer"

const store = createStore(mainReducer);

export default store;