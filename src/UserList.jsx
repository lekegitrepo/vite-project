import { useState, useEffect } from "react";
import UsersTable from "./Users/UsersTable";
import "./App.css";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <UsersTable users={users} />
    </>
  );
}

export default UserList;
