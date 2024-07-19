import { useState } from "react";
import "./App.css";

function UserInput() {
  const [person, setPersonValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
  });

  const inputChanged = (event) => {
    setPersonValue({ ...person, [event.target.name]: event.target.value });
  };

  const formSubmitted = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <p>
        FirstName: {person.firstName} LastName: {person.lastName} Email:{" "}
        {person.email} Age: {person.age}
      </p>
      <form onSubmit={formSubmitted}>
        <input
          value={person.firstName}
          name="firstName"
          onChange={inputChanged}
        />
        <input
          value={person.lastName}
          name="lastName"
          onChange={inputChanged}
        />
        <input value={person.email} name="email" onChange={inputChanged} />
        <input value={person.age} name="age" onChange={inputChanged} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default UserInput;
