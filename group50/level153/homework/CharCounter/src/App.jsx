import { useState } from "react";

function App() {
  let [characterCount, setcharacterCount] = useState(0);
  let [text, settext] = useState("");

  function reset() {
    setcharacterCount(0);
    settext("");
  }
  function checkCharacters(event) {

    setcharacterCount(event.target.value.length)

  }

  return (
    <>
      <form >
        <textarea onChange={checkCharacters} maxLength={100} >

        </textarea>

        <button onClick={reset}>reset</button>
      </form>

      <h1>Total Characters: {characterCount >= 100 ? "You Reached Character Limit" : characterCount}</h1>
    </>
  )
}

export default App;
