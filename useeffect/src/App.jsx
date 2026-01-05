import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [display, setdisplay] = useState(true);



  return (
    <>
      {
        display ? <Counter count={count} data={data} /> : null
      }

      <button onClick={() => setCount(count + 1)}>Counter</button>&nbsp;&nbsp;
      <button onClick={() => setData(data + 1)}>Data</button>&nbsp;&nbsp;
      <button onClick={()=>setdisplay(!display)}>Toggle</button>
    </>
  )
}

export default App
