function UsersTable({ users }) {
  return (
    <>
      <table>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <img src={user.avatar} alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UsersTable;
