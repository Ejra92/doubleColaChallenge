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

  const stopOrContinue = () => setStop(!stop)

  const savingStopData = (queue, count) => {
    setStopedArray(queue)
    setStopedCount(count)
  }

  const whoIsNext = (queue , n) => {
    for (let count = 0 || stopedCount; count < n; count++) { 
      if(stop) {
        savingStopData(queue, count)
        break
      }

      console.log(count)

      queue = goTwoEnd(queue) 
    }

    return queue[0]
  }

  console.log(whoIsNext(theBigBangTeamQueue, 52))

  return (
    <div className="App">
      <p>hola</p>
    </div>
  )
}