import React, { useEffect, useState } from 'react'


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

  const stopOrContinue = () => setStop(!stop)

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

    if(stop) return

    if(!stop && !howManyTimes) return alert('Para iniciar el juego debe agregar un numero mayor a 0')

    
    for (let count = 0 || stopedCount; count <= howManyTimes; count++) { 
      console.log(stop)
      console.log(howManyTimes)
      if(stop) {
        savingStopData(queue, count)
        break
      }

      queue = goTwoEnd(queue)

      console.log(count)
    }
        // if(count === howManyTimes) {
        //   setWhosDrinkTheNDoubleCola(queue[0])
        //   setStop(true)
        //   setStopedArray([])
        // }
  }, [stop])

  // useEffect(() => {
  //   console.log(whosDrinkTheNDoubleCola)
  // }, [whosDrinkTheNDoubleCola])

  return (
    <div className="App">
      <button onClick={stopOrContinue}>{stop ? 'Iniciar' : 'Parar'}</button>
      <button onClick={() => setHowManyTimes(52)}>Da 52 veces</button>
    </div>
  )
}