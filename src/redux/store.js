import counterReducer from "./reducers/counterReducer.js";
import { legacy_createStore as createStore } from "redux";

const store = createStore(counterReducer);

export default store;
