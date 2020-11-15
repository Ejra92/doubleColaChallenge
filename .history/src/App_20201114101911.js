import React, { useEffect, useState } from 'react'

let theBigBangTeamQueue  = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']

const goTwoEnd = queue => {
  const whosNextToTakeDoubleCola = queue.shift()

  return queue = [...queue, whosNextToTakeDoubleCola, whosNextToTakeDoubleCola]
}


export default function App() {
  const [stop, setStop] = useState(false)

  const [lastToTakeNDoubleCola, setLastToTakeNDoubleCola] = useState('')
  
  // const [stopedArray, setStopedArray] = useState([])
  
  const [stopedCount, setStopedCount] = useState()

  // const [followCount, setFollowCount] = useState(0)

  const [howManyTimes, setHowManyTimes] = useState(6)



  const stopOrContinue = () => setStop(!stop)

  // const savingStopData = (queue, count) => {
  //   setStopedArray(queue)
  //   setStopedCount(count)
  // }

  // const whoIsNext = async (queue , n) => {
  //   let count = stopedCount || 1

  //   for (count; count < n; count++) { 
  //     if(stop) {
  //       // savingStopData(queue, count)
  //       console.log('hasta aqui llegue')
  //       break
  //     }

  //     await new Promise(resolve => setTimeout(resolve, 1000))

  //     console.log(count)

  //     queue = goTwoEnd(queue)
  //   }

  //   return queue[0]
  // }


  const generateFinalQueue = () => {
    let queue = [...theBigBangTeamQueue]

    for (let count = 1; count < howManyTimes; count++) queue = goTwoEnd(queue)

    return queue
  }

  // const whoIsNext = async () => {
  //   let count = stopedCount || 1
  //   let queue = [...theBigBangTeamQueue]

  //   // if(!stop && !howManyTimes) return

  //   for (count; count < howManyTimes; count++) queue = goTwoEnd(queue)

  //   return setLastToTakeNDoubleCola(queue[0])
  // }

  useEffect(() => {
    if(!stop && !howManyTimes) return
    const finalQueue = generateFinalQueue()
    
    // whoIsNext()

    console.log(finalQueue[0])
  }, [stop])

  return (
    <div className="App">
      <button onClick={stopOrContinue}>{stop ? 'Continuar' : 'Detener'}</button>
      <p> quien tomo la lata nro {howManyTimes} fue {lastToTakeNDoubleCola} </p>
    </div>
  )
}