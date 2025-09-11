import { useState } from 'react'
import Element from './components/element'



function App() {

  let [listitem, addelement] = useState([]);
  let todoslist = []

  return (
    <>


      <form className='w-80 h-86 border-4  ' action=""
        onSubmit={(event) => {
          event.preventDefault()
          todoslist.push({
            name: event.target.title.value,
            text: event.target.text.value
          })

          addelement(todoslist)

        }}>


        <input type="text" name="title" />
        <input type="text" name="text" />
        <button type="submit" >submit</button>

      </form>

      <ul>
        {listitem.map((todo) => {
          return <Element title={todo.name} text={todo.text} />
        }

        )}
      </ul>
    </>
  )
}

export default App
