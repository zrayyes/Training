import C from "./constants";
import appReducer from "./store/reducers";
import initialState from "./initialState.json";

let state = initialState;

console.log(JSON.stringify(state));

state = appReducer(state,{
    type: C.SET_GOAL,
    payload: 2
});

state = appReducer(state,{
    type: C.ADD_DAY,
    payload: {
        "resort": "Super Mountain",
        "date": "2014-05-08",
        "powder": false,
        "backcountry": false
    }
});

console.log(JSON.stringify(state));