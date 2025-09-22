import { useState } from 'react'


function App() {
  
  let [formData, setFormData] = useState({
    "name": "",
    "password": "",
    "confirm_password": ""
  });


  function hanleChange(event) {

    const { name, value } = event.target;
    console.log(event.target);
    setFormData({ ...formData, [name]: value })
    console.log(formData)
  }

  function handleSubmit(event) {
    event.preventDefault();


  }
  return (
    <>
      <form className='flex flex-col justify-center p-4 gap-1.5 w-80 h-80 border-2 rounded-xl bg-teal-800 text-white '>
        <label >name:</label>
        <input type="text" name='name' value={formData.name} onChange={hanleChange} minLength={10} className='border-2' />
        <p ></p>
        <label >password:</label>
        <input type="password" name="password" value={formData.password} onChange={hanleChange} className='border-2' />
        <label >confirm password:</label>
        <input type="password" name="confirm_password" value={formData.confirm_password} onChange={hanleChange} className='border-2' />
        <div className='w-full flex justify-center items-center mt-2'>
          <button type="submit" className=' border-2 bg-blue-400 text-xl text-black font-semibold w-fit h-fitt px-2.5 py-1 rounded-2xl' >subbmit</button>
        </div>

      </form>

    </>
  )
}


export default App
