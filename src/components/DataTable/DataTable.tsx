import React from 'react'
import { DataGrid, GridColDef,} from '@mui/x-data-grid'
import { IBook } from '../../types/types';
import { Link } from 'react-router-dom';
import styles from './DataTable.module.scss'

interface DataTableProps {
  books: IBook[]
}

const handleDelete = (id: number) => {
  console.log(id)
}

export const DataTable = ({books}: DataTableProps) => {


  return (
    <div style={{ height: 700, width: '60%' }}>
        <DataGrid rows={books} columns={columns} />
    </div>
  )
}

const columns: GridColDef[] = [
  { field: 'title', headerName: 'Book Title', width: 300},
  { field: 'author', headerName: 'Author name', width: 200},
  { field: 'category', headerName: 'Category', width: 200},
  { field: 'isbn', headerName: 'ISBN', width: 200 },
  { field: 'action', headerName: 'Actions', width: 200, renderCell: (params) => {
    return (
      <div className={styles.edit}>
        <Link to={'/edit/' + params.row.id}>
          <button>Edit</button>
        </Link>
        <span
          title={`Delete ${params.row.title}`}
          className="productListDelete"
          onClick={() => handleDelete(params.row.id)}
        >&#x2716;</span>
      </div>
    );
  },}
];
