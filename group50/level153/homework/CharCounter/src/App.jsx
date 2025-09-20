import { useState } from 'react'


function App() {

  let [characterCount, setcharacterCount] = useState(0);

  function checkcharacter(event) {

    let charstring = event.target.character.value
    setcharacterCount(charstring.length)
  }

  function reset(event) {
    setcharacterCount(0)
    event.preventDefault()
    event.target.character.textContent = ""

  }
  // can stop the useer from typeing any more  and the reset button 
  return (
    <>
      <form onChange={checkcharacter}>
        <textarea name="character"  ></textarea>
        <button onClick={reset} >reset</button>
      </form>


      <p>Total Characters: {characterCount > 100 ? "not any more" : characterCount}</p>

    </>
  )
}

export default App
