import { useState } from 'react'
import './App.css'

function App() {
  const initail = 0;
  const [count, setCount] = useState(initail)

  return (
    <>
      <h1>React course with <br /> suleiman + hitesh </h1>
      <h2>Counter {count}</h2>
      <button onClick={() => {
        setCount(count + 1)
        // setCount((prevCount) => prevCount + 1)
        // setCount((prevCount) => prevCount + 1)
        // setCount((prevCount) => prevCount + 1)
        // setCount((prevCount) => prevCount + 1)
      }}>Icrement</button> {" "}
      <button 
      onClick={() => setCount(count - 1)}>Decrement</button> 
    <footer> <hr />
      <button onClick={() => setCount(initail)}>Reset</button>
    </footer>
    </>
  )
}

export default App
