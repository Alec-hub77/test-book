export const GET_BOOKS = 'GET_BOOKS'
export const DELETE_BOOK = 'DELETE_BOOK'
export const ADD_BOOK = 'ADD_BOOK'



export interface IBook {
    id: string
    title: string
    author: string
    category: string
    isbn: number
}

export interface IBookState {
    books: IBook[] | null
}

interface GetBooksAction {
    type: typeof GET_BOOKS,
    payload: IBook
}

interface AddBookAction {
    type: typeof ADD_BOOK,
    payload: IBook
}
interface DeleteBookAction {
    type: typeof DELETE_BOOK,
    payload: string | null
}

export type BooksAction = GetBooksAction | DeleteBookAction | AddBookAction;