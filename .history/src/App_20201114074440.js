import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'


const theBigBangTeamQueue  = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']

const goTwoEnd = queue => {
  const whosNextToTakeDoubleCola = queue.shift()

  return queue = [...queue, whosNextToTakeDoubleCola, whosNextToTakeDoubleCola]
}


export default function App() {
  const [stop, setStop] = useState(false)

  const [whosDrinkTheNDoubleCola, setWhosDrinkTheNDoubleCola] = useState('')

  const [howManyTimes, setHowManyTimes] = useState(0)
  
  const [stopedArray, setStopedArray] = useState([])
  
  const [stopedCount, setStopedCount] = useState()

  const stopOrContinue = () => {
    console.log('hola')
    setStop(!stop)
  }

  // const whoIsNext = (queue , n) => {
  //   for (let count = 0 || stopedCount; count < n; count++) { 
  //     if(stop) {
  //       setStopedArray(queue)
  //       setStopedCount(count)
  //       break
  //     }

  //     setTimeout(() => {
  //       queue = goTwoEnd(queue) 
  //     }, 3000)
  //   }

  //   return queue[0]
  // }

  const savingStopData = (queue, count) => {
    setStopedArray(queue)
    setStopedCount(count)
  }

  useEffect(() => {
    let queue = stopedArray || theBigBangTeamQueue

    console.log(stop)
    console.log(howManyTimes)

    if(!stop && !howManyTimes) return alert('Para iniciar el juego debe agregar un numero mayor a 0')

    for (let count = 0 || stopedCount; count <= howManyTimes; count++) { 
      if(stop) {
        savingStopData(queue, count)
        break
      }

      queue = goTwoEnd(queue)

      setTimeout(() => {
        console.log(count) 
      }, 1000)

      if(count === howManyTimes) {
        setWhosDrinkTheNDoubleCola(queue[0])
        setStop(true)
        setStopedArray([])
        console.log(whosDrinkTheNDoubleCola)
      }
    }
  }, [stop])

  return (
    <div className="App">
      <button onClick={stopOrContinue}>Iniciar</button>
      <button onClick={() => setHowManyTimes(52)}>Da 52 veces</button>
    </div>
  )
}