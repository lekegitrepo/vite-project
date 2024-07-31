import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import Counter from "./Counter.jsx";
// import MessageLength from "./MessageLength.jsx";
import "./index.css";
// import ChangeColor from "./ChangeColor.jsx";
// import UserRegistration from "./UserRegistration.jsx";
// import UserInput from "./UserInput.jsx";
// import TodoApp from "./TodoApp.jsx";
// import Nasa from "./Nasa.jsx";
// import UserList from "./UserList";
// import Trivia from "./Trivia";
// import User from "./User";
import GithubApi from "./GithubApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App firstname="Reece" lastname="James" /> */}
    {/* <Counter /> */}
    {/* <MessageLength message="This is a long message" /> */}
    {/* <ChangeColor /> */}
    {/* <UserRegistration />
    <UserInput />
    <TodoApp /> */}
    {/* <Nasa /> */}
    {/* <UserList /> */}
    {/* <Trivia /> */}
    {/* <User /> */}
    <GithubApi />
  </React.StrictMode>
);
