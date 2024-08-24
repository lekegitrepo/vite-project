import { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { AddTodo } from '../components/FirebaseAddTodoDialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'

export const FirebaseTodo = () => {
  const [todos, setTodos] = useState([])

  const columnDefs = [
    { field: 'description', sortable: true, filter: true },
    { field: 'date', sortable: true, filter: true },
    { field: 'priority', sortable: true, filter: true },
    {
      field: 'id',
      headerName: '',
      width: 90,
      cellRenderer: (param) => (
        <IconButton
          onClick={() => deleteTodo(param.value)}
          size="small"
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ]

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = () => {
    fetch('https://todolist-24cf5-default-rtdb.firebaseio.com/items/.json')
      .then((response) => response.json())
      .then((data) => addKeys(data))
      .catch((err) => err)
  }

  const addKeys = (data) => {
    const keys = Object.keys(data)
    const itemsWithId = Object.values(data).map((item, index) =>
      Object.defineProperty(item, 'id', { value: keys[index] })
    )
    setTodos(itemsWithId)
  }

  const addTodo = (newTodo) => {
    fetch('https://todolist-24cf5-default-rtdb.firebaseio.com/items/.json', {
      method: 'POST',
      body: JSON.stringify(newTodo),
    })
      .then(() => fetchItems())
      .catch((err) => err)
  }

  const deleteTodo = (id) => {
    fetch(
      `https://todolist-24cf5-default-rtdb.firebaseio.com/items/${id}.json`,
      {
        method: 'DELETE',
      }
    )
      .then(() => fetchItems())
      .catch((err) => err)
  }

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
        <AddTodo addTodo={addTodo} />

        <div className="ag-theme-material" style={{ height: 400, width: 700 }}>
          <AgGridReact rowData={todos} columnDefs={columnDefs} />
        </div>
      </Stack>
    </>
  )
}
