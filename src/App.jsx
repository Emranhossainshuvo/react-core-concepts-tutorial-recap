import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Event from './Event'
import Team from './team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>React core concepts recap</h3>
      <Team></Team>
      <Counter></Counter>
      <Event></Event>
    </>
  )
}

export default App
