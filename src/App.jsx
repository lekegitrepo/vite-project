import "./App.css";

function App(props) {
  return (
    <>
      <h1>Welcome to my site</h1>
      <p>
        {props.firstname} {props.lastname}, I hope you've had a nice day
      </p>
    </>
  );
}

export default App;
