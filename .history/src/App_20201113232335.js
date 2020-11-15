import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

export default () => {
  // const [count, setstate] = useState('')

  const theBigBangTeamQueue  = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']



  const whoIsNext = (queue , n) => {
    for (let count = 0; count < n; count++) {
      const whosNextToTakeDoubleCola =  queue.shift()

      //saber cuantos de estos hay en la cola
      queue = [...queue, whosNextToTakeDoubleCola, whosNextToTakeDoubleCola]
      console.log(count)
    }

    return  queue[0]
  }

  console.log(whoIsNext(theBigBangTeamQueue, 10000))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
