import "./App.css";

function MessageLength({ message }) {
  return (
    <>{message.length > 10 ? <p>Message is too long</p> : <p>{message}</p>}</>
  );
}

export default MessageLength;
