import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import Counter from "./Counter.jsx";
import MessageLength from "./MessageLength.jsx";
import "./index.css";
import ChangeColor from "./ChangeColor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App firstname="Reece" lastname="James" /> */}
    {/* <Counter /> */}
    <MessageLength message="This is a long message" />
    <ChangeColor />
  </React.StrictMode>
);
