import C from "./constants";
import appReducer from "./store/reducers";
import initialState from "./initialState.json";
import {createStore} from "redux";



const store = createStore(appReducer);

store.subscribe(()=>(console.log(store.getState())));

store.subscribe(()=>{
    const state = JSON.stringify(store.getState());
    localStorage['redux-store'] = state;
});

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Super Mountain",
        "date": "2012-06-06",
        "powder": true,
        "backcountry": true
    }
});

store.dispatch({
    type: C.SET_GOAL,
    payload: 5
});

