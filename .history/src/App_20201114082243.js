import React, { useEffect, useState } from 'react'

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

      setTimeout(() => {
        queue = goTwoEnd(queue) 
      }, 3000)
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