import { Delete } from '@mui/icons-material'
import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { AgGridReact } from 'ag-grid-react'
import { useEffect, useState } from 'react'
import AddNewBook from '../components/AddNewBook'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'

export const Bookstore = () => {
  const [books, setBooks] = useState([])

  const fetchBooks = () => {
    fetch(
      'https://bookstore-c9fe9-default-rtdb.europe-west1.firebasedatabase.app/books/.json'
    )
      .then((response) => response.json())
      .then((data) => {
        mapBookWithId(data)
      })
      .catch((err) => err)
  }

  const columnDefs = [
    { field: 'title', headerName: 'Title' },
    { field: 'price', headerName: 'Price' },
    { field: 'isbn', headerName: 'Isbn' },
    { field: 'author', headerName: 'Author' },
    { field: 'year', headerName: 'Year' },
    {
      field: 'id',
      headerName: '',
      width: 90,
      cellRenderer: (params) => (
        <IconButton
          size="small"
          color="error"
          onClick={() => deleteBook(params.value)}
        >
          <Delete />
        </IconButton>
      ),
    },
  ]

  const mapBookWithId = (data) => {
    const keys = Object.keys(data)
    const mappedBooks = Object.values(data).map((book, index) => {
      return Object.defineProperty(book, 'id', { value: keys[index] })
    })
    setBooks(mappedBooks)
  }

  const addBook = (book) => {
    fetch(
      'https://bookstore-c9fe9-default-rtdb.europe-west1.firebasedatabase.app/books/.json',
      {
        method: 'POST',
        body: JSON.stringify(book),
      }
    )
      .then(() => fetchBooks())
      .catch((err) => err)
  }

  const deleteBook = (id) => {
    fetch(
      `https://bookstore-c9fe9-default-rtdb.europe-west1.firebasedatabase.app/books/${id}.json`,
      {
        method: 'DELETE',
      }
    )
      .then(() => fetchBooks())
      .catch((err) => err)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bookstore
          </Typography>
        </Toolbar>
      </AppBar>
      <Stack spacing={5} mt={8} direction="column" alignItems="center">
        <AddNewBook addBook={addBook} />
        <div className="ag-theme-material" style={{ height: 400, width: 1090 }}>
          <AgGridReact rowData={books} columnDefs={columnDefs} />
        </div>
      </Stack>
      .
    </>
  )
}
