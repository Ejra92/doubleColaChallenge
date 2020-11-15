import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

export default () => {
  const [state, setstate] = useState('')

  const theBigBangTeam = ['Sheldon', 'Leonard', 'Penny', 'Howard']

  const whoIsNext = (arr, n) => {
    let count = 0

    // while (n > count) {
      //tomar primer valor
      const nextToTakeDoubleCola =  arr.shift()

      //saber cuantos de estos hay en la cola
      arr = [...arr, nextToTakeDoubleCola, nextToTakeDoubleCola]

      count++
    // }



    console.log(nextToTakeDoubleCola, arr)
  }

  console.log(whoIsNext(theBigBangTeam))

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
