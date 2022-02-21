import React, { useReducer } from 'react'
import { DataTable } from '../../components/DataTable/DataTable'

import { GET_BOOKS, IBook } from '../../types/types'
import styles from './Dashboard.module.scss'



export const Dashboard: React.FC = () => {

  const [books, setBooks] = React.useState<IBook[]>([])

  React.useEffect(() => {

    fetch('http://localhost:3001/books')
    .then(res => res.json())
    .then(result =>setBooks(result))

  },[])
  console.log(books)


  return (
    <div className={styles.content}>
        <DataTable books={books}/>
    </div>
  )
}