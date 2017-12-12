import C from "./constants";
import { allSkiDays } from "./store/reducers";

const state = [
    {
        "resort": "Squaw Valley",
        "date": "2016-01-02",
        "powder": true,
        "backcountry": false
    }
];

const action = {
    type: C.ADD_DAY,
    payload: {
        "resort": "Super Mountain",
        "date": "2017-08-08",
        "powder": false,
        "backcountry": false
    }
}

const nextState = allSkiDays(state, action);

console.log(`
initial state: ${JSON.stringify(state)}
new state: ${JSON.stringify(nextState)}
`);