import { useState } from "react";

function Trivia() {
  const [question, setQuestion] = useState(
    "Click the button to get new questions"
  );

  const handleOnClick = () => {
    fetch("https://opentdb.com/api.php?amount=1")
      .then((response) => {
        if (response.status !== 200) {
          throw Error("This Response is not Ok!");
        }

        return response.json();
      })
      .then((resp) => {
        setQuestion(resp.results[0].question);
      });
  };

  return (
    <>
      <div>{question}</div>
      <div>
        <button onClick={handleOnClick}>New Question</button>
      </div>
    </>
  );
}

export default Trivia;
