import C from "./constants";
import { skiDay } from "./store/reducers";

const state = null;

const action = {
    type: C.ADD_DAY,
    payload: {
        "resort": "Super Mountain",
        "date": "2013-02-02",
        "powder": false,
        "backcountry": true
    }
}

const nextState = skiDay(state, action);

console.log(`

    initial goal: ${state}
    action: ${JSON.stringify(action)}
    new resort: ${JSON.stringify(nextState)}
`);