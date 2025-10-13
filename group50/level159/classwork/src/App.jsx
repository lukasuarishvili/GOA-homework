import { useState } from 'react'


function App() {

  let [name, setname] = useState("");
  let [age, setage] = useState();

  return (
    <>
    <form action="">
      <input type="" name="" id="" />
    </form>
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