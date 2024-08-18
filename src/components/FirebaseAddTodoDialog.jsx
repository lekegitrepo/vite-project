import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

export const AddTodo = (props) => {
  const [open, setOpen] = useState(false)
  const [todo, setTodo] = useState({ description: '', data: '', priority: '' })

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSave = () => {
    props.addTodo(todo)
    setTodo({ description: '', data: '', priority: '' })
    handleClose()
  }

  const handleOnChange = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value })
  }

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Add Todo
      </Button>
      <Dialog open={open}>
        <DialogTitle>New Todo</DialogTitle>
        <DialogContent>
          <TextField
            name="description"
            label="Description"
            value={todo.description}
            onChange={handleOnChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="date"
            label="Date"
            value={todo.date}
            onChange={handleOnChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="priority"
            label="Priority"
            value={todo.priority}
            onChange={handleOnChange}
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddTodo
