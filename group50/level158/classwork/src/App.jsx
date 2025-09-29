import { useEffect, useState } from 'react'


function App() {

  let [name, setName] = useState("");
  let [age, setAge] = useState();



  useEffect(() => {
    if (name.length >= 12 && Number(age) >= 18) {
      console.log("correct Name");
      console.log("correct age");
    } else if (name.length >= 12) {
      console.log("correct Name");
    } else if (Number(age) >= 18) {
      console.log("correct age");
    } else {
      console.log("invalid name or value");

    }
  }, [name, age])
  return (
    <>
      <form>
        <input
          type="text"
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          name='age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </form>
      <p>Current values: {name} ,{age}</p>
    </>
  )
}

export default App


// შექმენით ორი state ერთი, name და age
// --> მომხმარებელს მოთხოვეთ შემოიყვანოს თავისი სახელი და ასაკი
// --> შექმენით ერთი useEffect და ორივე state უთვალთვალეთ
// --> თუ name შეიცავს მინიმუმ 12 სიმბოლოს დააკონსოლოგეთ correct Name
// --> თუ age მეტია ან ტოლი 18 დააკონსოლოგეთ correct age
// სხვა შემთხვევაში დააკონსოლოგეთ invalid name or value