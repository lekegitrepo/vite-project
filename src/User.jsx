import { useState } from "react";
import "./App.css";

function UserList() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState("");

  const handleOnChange = (event) => {
    setUserId(event.target.value);
  };

  const fetchUserData = () => {
    fetch(`https://reqres.in/api/users/${userId}`)
      .then((response) => {
        if (response.status !== 200) {
          console.log("This is response not ok!");
          throw new Error("Response not ok !");
        }
        return response.json();
      })
      .then((resp) => {
        setUser(resp.data);
      })
      .catch((err) => err);
  };

  return (
    <>
      <div>
        <input type="text" value={userId} onChange={handleOnChange} />
      </div>
      <div>
        <button onClick={fetchUserData}>Get User</button>
      </div>
      <div>
        {user.first_name} {user.last_name} {user.email}
      </div>
    </>
  );
}

export default UserList;
