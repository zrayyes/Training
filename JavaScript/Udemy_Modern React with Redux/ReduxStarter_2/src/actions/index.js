export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

export function deleteBook(book) {
    return {
        type: 'DELETE_BOOK',
        payload: book
    }
}