import C from "../constants";

export const goal = (state=10, action) => {
    (action.type === C.SET_GOAL) ?
    Number(action.payload):
    state
}

export const skiDay = (state=null, action) => {
    (action.type === C.ADD_DAY) ?
    action.payload:
    state
}

export const errors = (state=null, action) => {

    switch(action.type) {

        case C.ADD_ERROR :
            return [
                ...state,
                action.payload
            ];

        case C.CLEAR_ERROR :
            return state.filter((messsage,i) => i > action.payload);
        
        default:
            return state
    }
}