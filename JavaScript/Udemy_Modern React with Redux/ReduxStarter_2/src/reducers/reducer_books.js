let defaultState = [
    { title: "Book 1", pages: 412 },
    { title: "Book 2", pages: 331 },
    { title: "Book 3", pages: 124 },
    { title: "Book 4", pages: 82 },
    { title: "Book 5", pages: 99 }
]

export default function (state = defaultState, action) {
    switch (action.type) {
        case 'DELETE_BOOK':
            let newState = state.filter(book => book !== action.payload);
            return newState;
    }

    return state;
}