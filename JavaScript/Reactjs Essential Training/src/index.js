import C from "./constants";
import appReducer from "./store/reducers";
import initialState from "./initialState.json";
import {createStore} from "redux";

const store = createStore(appReducer, initialState);

console.log('initial state', store.getState());

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Super Mountain",
        "date": "2012-06-06",
        "powder": true,
        "backcountry": true
    }
});

console.log('Current state', store.getState());
