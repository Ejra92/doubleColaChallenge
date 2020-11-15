import React, { useEffect, useState } from 'react'

const theBigBangTeamQueue  = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']

const goTwoEnd = queue => {
  const whosNextToTakeDoubleCola = queue.shift()

  return queue = [...queue, whosNextToTakeDoubleCola, whosNextToTakeDoubleCola]
}


export default function App() {
  const [stop, setStop] = useState(false)

  const [lastToTakeNDoubleCola, setLastToTakeNDoubleCola] = useState('')
  
  const [stopedArray, setStopedArray] = useState([])
  
  const [stopedCount, setStopedCount] = useState()

  const [followCount, setFollowCount] = useState(0)

  const [howManyTimes, setHowManyTimes] = useState(6)



  const stopOrContinue = () => setStop(!stop)

  const savingStopData = (queue, count) => {
    setStopedArray(queue)
    setStopedCount(count)
  }

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

  useEffect(() => {
    let count = stopedCount || 1

    if((!stop && !howManyTimes) || stop) return

    for (count; count < n; count++) { 
      if(stop) {
        // savingStopData(queue, count)
        console.log('hasta aqui llegue')
        break
      }

      await new Promise(resolve => setTimeout(resolve, 1000))

      console.log(count)

      setFollowCount(count)

      queue = goTwoEnd(queue)
    }

    return setLastToTakeNDoubleCola()
  }, [stop, followCount])


  return (
    <div className="App">
      <button onClick={stopOrContinue}>{stop ? 'Continuar' : 'Detener'}</button>
    </div>
  )
}