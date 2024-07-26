import { useState } from "react";
import TodoTable from "./Todo/TodoTable";
import "./App.css";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState({ description: "", date: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo({ description: "", date: "" });
  };

  const handleOnChange = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleDeleteTodo = (value) => {
    setTodoList(todoList.filter((todo, index) => index !== value));
  };

  return (
    <>
      <header>
        <h1>Todo App</h1>
      </header>
      <main>
        <div>
          <TodoTable todoList={todoList} deleteTodo={handleDeleteTodo} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="desc">
            <input
              type="text"
              value={todo.description}
              name="description"
              onChange={handleOnChange}
            />
          </div>
          <div className="date">
            <input
              type="date"
              value={todo.date}
              name="date"
              onChange={handleOnChange}
            />
          </div>
          <div className="submit">
            <button type="submit">Add</button>
          </div>
        </form>
      </main>
      <footer></footer>
    </>
  );
}

export default TodoApp;
