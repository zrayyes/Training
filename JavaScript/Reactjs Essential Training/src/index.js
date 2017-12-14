import C from "./constants";
import storeFactory from "./store";

const initialState = (localStorage['redux-store']) ?
                        JSON.parse(localStorage['redux-store']):
                        {};

const saveState = () => {
    const state = JSON.stringify(store.getState());
    localStorage['redux-store'] = state;
}

const store = storeFactory(initialState);

store.subscribe(saveState);

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "V5 Valley",
        "date": "2013-05-08",
        "powder": true,
        "backcountry": true
    }
});

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "V5 Valley",
        "date": "2014-05-08",
        "powder": true,
        "backcountry": true
    }
});

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "V5 Valley",
        "date": "2015-05-08",
        "powder": true,
        "backcountry": true
    }
});