import { useState } from 'react'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { TextField } from '@mui/material'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import Save from '@mui/icons-material/Save'
import { DataGrid } from '@mui/x-data-grid'
import '../App.css'

function MaterialUITodo() {
  const [todo, setTodo] = useState({ description: '', date: '' })
  const [todos, setTodos] = useState([])

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value })
  }

  const addTodo = () => {
    const newTodo = { ...todo, id: Date.now() }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row))
  }

  const columns = [
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'date', headerName: 'Date', width: 200 },
  ]

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TodoList
          </Typography>
        </Toolbar>
      </AppBar>
      <Stack spacing={5} mt={8} direction="column" alignItems="center">
        <Stack
          direction="row"
          spacing={2}
          mt={2}
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            variant="standard"
            label="Description"
            name="description"
            value={todo.description}
            onChange={inputChanged}
          />
          <TextField
            variant="standard"
            label="Date"
            name="date"
            value={todo.date}
            onChange={inputChanged}
          />
          <Button variant="outlined" onClick={addTodo} startIcon={<Save />}>
            <span>Add</span>
          </Button>
        </Stack>
        <div style={{ height: 350, width: '50%' }}>
          <DataGrid rows={todos} columns={columns} getRowId={(row) => row.id} />
        </div>
        {/* <table>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.description}</td>
                <td>{todo.date}</td>
                <td>
                  <Tooltip title="Delete Todo">
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => deleteTodo(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </Stack>
    </>
  )
}

export default MaterialUITodo
