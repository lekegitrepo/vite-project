import { useState } from "react";
import "./App.css";

function UserRegistration() {
  const [person, setPersonValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
  });

  const inputChanged = (event) => {
    setPersonValue({ ...person, [event.target.name]: event.target.value });
  };

  const formSubmitted = (event) => {
    event.preventDefault();
    if (
      person.firstName &&
      person.lastName &&
      person.email &&
      person.phoneNumber
    ) {
      alert(`Welcome ${person.firstName} ${person.lastName}`);
    } else {
      alert("All the fields are required");
    }
  };

  return (
    <>
      <form onSubmit={formSubmitted}>
        <div>
          <input
            value={person.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={inputChanged}
          />
        </div>
        <div>
          <input
            value={person.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={inputChanged}
          />
        </div>
        <div>
          <input
            value={person.email}
            name="email"
            placeholder="Email"
            onChange={inputChanged}
          />
        </div>
        <div>
          <input
            value={person.phoneNumber}
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={inputChanged}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
}

export default UserRegistration;
