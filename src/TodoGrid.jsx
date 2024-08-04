import { useState } from 'react'
import './App.css'

import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'

import ReactiveButton from 'reactive-button'

function TodoGrid() {
  const [todo, setTodo] = useState({ description: '', date: '', status: '' })
  const [todos, setTodos] = useState([])

  const columnDefs = [
    { field: 'description', filter: true, suppressMovable: true },
    { field: 'date', filter: true, suppressMovable: true },
    { field: 'status', filter: true, suppressMovable: true },
  ]

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value })
  }

  const addTodo = () => {
    setTodos([...todos, todo])
    setTodo({ description: '', date: '', status: '' })
  }

  return (
    <>
      <input
        placeholder="Description"
        name="description"
        value={todo.description}
        onChange={inputChanged}
      />
      <input
        placeholder="Date"
        name="date"
        value={todo.date}
        onChange={inputChanged}
      />
      <input
        placeholder="Status"
        name="status"
        value={todo.status}
        onChange={inputChanged}
      />
      <ReactiveButton
        idleText="Add"
        size="large"
        rounded
        onClick={addTodo}
        style={{ marginLeft: '5px' }}
      />
      <div className="ag-theme-material" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={todos} columnDefs={columnDefs} />
      </div>
    </>
  )
}

export default TodoGrid
