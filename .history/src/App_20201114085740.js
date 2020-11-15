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
        savingStopData(queue, count)
        break
      }

      await new Promise(resolve => setTimeout(resolve, 1000))

      queue = goTwoEnd(queue)
    }

    return queue[0]
  }

  whoIsNext(theBigBangTeamQueue, 6).then(console.log)

  return (
    <div className="App">
      <p>hola</p>
    </div>
  )
}