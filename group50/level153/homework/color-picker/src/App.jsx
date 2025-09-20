import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#eb4034");

  function changebg(event) {
    event.preventDefault();
    const newColor = `#${event.target.color.value}`;
    setColor(newColor);
    event.target.color.value = ""
  }

  return (
    <div className="h-screen w-full flex justify-center items-center" style={{ backgroundColor: color }}>
      <form onSubmit={changebg} className="space-x-2">
        <input type="text" name="color" placeholder="Enter hex (e.g. ff0000)" className="border-2 p-1" />
        <button type="submit" className="bg-black text-white px-3 py-1 rounded">Change</button>
      </form>
    </div>
  );
}

export default App;
