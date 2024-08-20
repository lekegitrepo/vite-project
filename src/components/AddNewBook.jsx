import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'
import { useState } from 'react'

export const AddNewBook = (props) => {
  const [open, setOpen] = useState(false)
  const [book, setBooks] = useState({
    title: '',
    author: '',
    price: '',
    isbn: '',
    year: '',
  })

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleSave = () => {
    props.addBook(book)
    setBooks({ title: '', author: '', price: '', isbn: '', year: '' })
    handleClose()
  }

  const handleOnChange = (event) => {
    setBooks({ ...book, [event.target.name]: event.target.value })
  }

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Add Book
      </Button>
      <Dialog open={open}>
        <DialogTitle>Add New Book</DialogTitle>
        <DialogContent>
          <TextField
            name="title"
            label="Title"
            value={book.title}
            onChange={handleOnChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="author"
            label="Author"
            value={book.author}
            onChange={handleOnChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="price"
            label="Price"
            value={book.price}
            onChange={handleOnChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="isbn"
            label="Isbn"
            value={book.isbn}
            onChange={handleOnChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="year"
            label="Year"
            value={book.year}
            onChange={handleOnChange}
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddNewBook
