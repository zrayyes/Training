import C from "./constants";
import appReducer from "./store/reducers";
import {createStore} from "redux";

const store = createStore(appReducer);

const unsubscribeGoalLogger = store.subscribe(
    ()=> console.log(` Goal: ${store.getState().goal}`)
);

setInterval(()=> {
    store.dispatch({
        type: C.SET_GOAL,
        payload: parseInt(Math.random() * 100)
    })
}, 500);

setTimeout(()=> unsubscribeGoalLogger(), 3000);