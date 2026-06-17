import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
      const [count, setCount]=useState(0);

      const increment = () =>{
        setCount (count+1);
      };

      const decrement = () =>{
        setCount (count-1);
      };

      const reset = () =>{
        setCount(0);
      };

  return (
    <>
      <div className="container">
        <h1>React Counter Application</h1>

        <h2 className="counter">{count}</h2>

        <div className></div>
        <button className="btn inc" onClick={increment}>Increment(+)</button>
        <button className="btn dec" onClick={decrement}>Decrement(-)</button>
        <button className="btn reset" onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App
