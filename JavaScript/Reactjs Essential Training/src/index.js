import C from "./constants";
import { goal } from "./store/reducers";

console.log(goal(10,{
    type: C.SET_GOAL,
    payload: 15
}))