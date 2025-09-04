import { useState } from 'react'
import './App.css'

function App() {


  return (

    <div>

      <header className={"flex flex-col items-center sm:flex-row justify-between px-6 py-4 bg-gray-80 bg-gray-600"}>
        <h1 className={"text-3xl font-bold text-white"}>Comp Name</h1>
        <nav className={"flex gap-6 mt-3 sm:mt-0"}>
          <a href="#" className={"text-gray-200 hover:text-white font-medium"}>About</a>
          <a href="#" className={"text-gray-200 hover:text-white font-medium"}>FAQs</a>
        </nav>
      </header>


      <main className={"px-6 py-10 bg-gray-300"}>
        <h2 className={"text-3xl sm:text-4xl font-extrabold text-red-600 mb-6"}>
          Popular this week
        </h2>

        <div className={"grid gap-6 sm:grid-cols-2 md:grid-cols-3"}>
          <div className={"bg-white shadow-md rounded-xl p-4"}>
            <h3 className={"text-lg font-bold mb-2"}>Item 1</h3>
            <p className={"text-gray-600"}>lorem ipsopm pu sheni de
            </p>
          </div>
          <div className={"bg-white shadow-md rounded-xl p-4"}>
            <h3 className={"text-lg font-bold mb-2"}>Item 2</h3>
            <p className={"text-gray-600"}>lorem ipsopm pu sheni de</p>
          </div>
          <div className={"bg-white shadow-md rounded-xl p-4"}>
            <h3 className={"text-lg font-bold mb-2"}>Item 3</h3>
            <p className={"text-gray-600"}>lorem ipsopm pu sheni de</p>
          </div>
        </div>
      </main>
    </div>


  )
}

export default App
