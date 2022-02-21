import React, { useReducer } from 'react'
import { DataTable } from '../../components/DataTable/DataTable'

import { GET_BOOKS, IBook } from '../../types/types'
import styles from './Dashboard.module.scss'



export const Dashboard: React.FC = () => {

  const [books, setBooks] = React.useState<IBook[]>([])

  React.useEffect(() => {
    fetchData()
  },[])
  console.log(books)

  const fetchData = async () => {
    await fetch('http://localhost:3001/books')
    .then(res => res.json())
    .then(result =>setBooks(result))
    .catch(err=> console.log(err))
  }

  const addBook = async () => {
    await fetch('http://localhost:3001/books', {
      method: 'POST',
      body: JSON.stringify({
        id: '2648b905a9c6d',
        title: 'My Book',
        author: 'Me',
        isbn: 5511,
        category: "horror"
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(res => {
      if(res.status !=201) {
        return
      }else {
        return res.json()
      }
    }).then(data => {
      setBooks((books) => [...books, data])
    })
  }

  return (
    <div className={styles.content}>
        <DataTable books={books}/>
        <button onClick={addBook}>Add book</button>
    </div>
  )
}