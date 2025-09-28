import { useState } from 'react'


function App() {

  let [formData, setFormData] = useState({
    "name": "",
    "password": "",
    "confirm_password": ""
  });

  let [toast, settoast] = useState(null)


  function hanleChange(event) {

    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value })

  }


  function handleSubmit(event) {
    event.preventDefault();
    let result = formData.confirm_password !== formData.password ? "sucsses" : "Failed";
    if (result === "sucsses") {
      showToast("Passwords do not match!", "error")
       
    } else {
      showToast("Registered successfully!", "success");
      setFormData({
        "name": "",
        "password": "",
        "confirm_password": ""
      }) ;
    }

  }

  function showToast(message, type) {
    settoast({ message, type })

    setTimeout(() => {
      settoast(null);
    }, 3000);
  }
  return (
    <>
      <form className='flex flex-col justify-center p-4 gap-1.5 w-80 h-80 border-2 rounded-xl bg-teal-800 text-white '
        onSubmit={handleSubmit}>

        <label >name:</label>
        <input
          type="text"
          name='name'
          value={formData.name}
          onChange={hanleChange}
          className='border-2 rounded-sm'
        />

        <p className='text-red-600 font-semibold'> {formData.name.length < 10 ? "name must have at least 10 chars" : ""} </p>

        <label >password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={hanleChange}
          className='border-2 rounded-sm'
        />

        <label >confirm password:</label>
        <input
          type="password"
          name="confirm_password"
          value={formData.confirm_password}
          onChange={hanleChange}
          className='border-2 rounded-sm'
        />

        <div className='w-full flex justify-center items-center mt-2'>
          <button
            type="submit"
            className=' border-2 bg-blue-400 text-xl text-black font-semibold w-fit h-fitt px-2.5 py-1 rounded-2xl' >subbmit</button>
        </div>

      </form>
      {toast ?  (
        <div
          className={`fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg text-white font-semibold
          ${toast.type === "error" ? "bg-red-500" : "bg-green-500"}`}
        >
          {toast.message}
        </div>
      ) : null}
    </>
  )
}


export default App


// 1) როგორ შეგვიძლია მრავალ input–ის მართვა ერთი useState–ით?

// 2) როგორ უნდა წამოვიღოთ ასეთი state იდან შესაბამისი მნიშვნელობები?

// 3) როგორ უნდა გავანახლოთ ასეთი state?

// 4) შექმენით Register კომპონენტი
// შექმენით 3 input ტეგი: name, password, confirm password და submit
// გააკონტროლეთ სამივე ინფუთის მნიშვნელობა ერთი state გამოყენებით.
// --> name input ის ქვეშ გამოაჩინეთ წითელი მესიჯი 'name must have at least 10 chars' მანამ სანამ მომხმარებლის სახელი არ შეიცავს მინიმუმ 10 სიმბოლოს
// onSubmit ზე:
// --> თუ პაროლები არ უდრის ერთმანეთს ამოაგდეთ შესაბამისი Toast(error)
// --> სხვა შემთხვევაში ამოაგდეთ Toast(success) და უთხარით რომ იგი წარმატებით დარეგისტრირდა

// 5) გააკეთეთ NumberGuesser კომპონენტი. პირობა წერია ზემოთ