import React, { useEffect, useState } from 'react'

const theBigBangTeamQueue  = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']

const goTwoEnd = queue => {
  const whosNextToTakeDoubleCola = queue.shift()

  return queue = [...queue, whosNextToTakeDoubleCola, whosNextToTakeDoubleCola]
}


export default function App() {
  const [stop, setStop] = useState(false)
  
  const [stopedArray, setStopedArray] = useState([])
  
  const [stopedCount, setStopedCount] = useState()

  const [count, setCount] = useState(0)


  const stopOrContinue = () => setStop(!stop)

  const savingStopData = (queue, count) => {
    setStopedArray(queue)
    setStopedCount(count)
  }

  const whoIsNext = async (queue , n) => {
    let count = stopedCount || 1

    for (count; count < n; count++) { 
      if(stop) {
        // savingStopData(queue, count)
        console.log('hasta aqui llegue')
        break
      }

      await new Promise(resolve => setTimeout(resolve, 1000))

      console.log(count)

      queue = goTwoEnd(queue)
    }

    return queue[0]
  }


  return (
    <div className="App">
      <button onClick={() => whoIsNext(theBigBangTeamQueue, 10).then(console.log)}>iniciar juego</button>
      <button onClick={stopOrContinue}>{stop ? 'Continuar' : 'Detener'}</button>
    </div>
  )
}