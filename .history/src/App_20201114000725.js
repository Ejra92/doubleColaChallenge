import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'


const theBigBangTeamQueue  = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']

const goTwoEnd = queue => {
  const whosNextToTakeDoubleCola = queue.shift()

  return queue = [...queue, whosNextToTakeDoubleCola, whosNextToTakeDoubleCola]
}


export default function App() {
  const [stop, setStop] = useState(true)
  
  const [stopedArray, setStopedArray] = useState([])
  
  const [stopedCount, setStopedCount] = useState()

  const stopOrContinue = () => setStop(!stop)

  const whoIsNext = (queue , n) => {
    for (let count = 0 || stopedCount; count < n; count++) { 
      if(stop) {
        setStopedArray(queue)
        setStopedCount(count)
        break
      }

      queue = goTwoEnd(queue) 
    }

    return queue[0]
  }

  console.log(whoIsNext(theBigBangTeamQueue, 52))

  return (
    <div className="App">
      <header className="App-header">
        <img onClick={stopOrContinue} src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}