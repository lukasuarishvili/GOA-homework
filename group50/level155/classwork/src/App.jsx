import { useState } from 'react'
import './App.css'

function App() {
  let [formData, setFormData] = useState({
    name: "",
    surname: "",
    age: "",
    email: ""
  })


  function handleSubmit(e) {
    e.preventDefault();
    console.log("ფორმის მნიშვნელობები:", formData);
  }

  function handleChange(e) {

    const { name, value } = e.target;
    setFormData(({ ...formData, [name]: value }));
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex-main'>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Surname:</label>
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
        />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default App
