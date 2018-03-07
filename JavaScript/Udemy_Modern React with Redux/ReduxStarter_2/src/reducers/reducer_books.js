export default function (state, action) {
    switch (action.type) {
        case 'DELETE_BOOK':
            console.log(action.payload.title)
            return state;
    }

    return [
        { title: "Book 1", pages: 412 },
        { title: "Book 2", pages: 331 },
        { title: "Book 3", pages: 124 },
        { title: "Book 4", pages: 82 },
        { title: "Book 5", pages: 99 }
    ]
}