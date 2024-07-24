function TodoTable({ todoList, deleteTodo }) {
  return (
    <>
      <table>
        <tbody>
          {todoList.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TodoTable;
