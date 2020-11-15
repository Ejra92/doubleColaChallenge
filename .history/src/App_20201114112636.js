import React, { useEffect, useState } from 'react'

let theBigBangTeamQueue  = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']

const goTwoEnd = queue => {
  const whosNextToTakeDoubleCola = queue.shift()

  return queue = [...queue, whosNextToTakeDoubleCola, whosNextToTakeDoubleCola]
}


export default function App() {
  const [stop, setStop] = useState(false)

  const [lastToTakeNDoubleCola, setLastToTakeNDoubleCola] = useState('')

  const [howManyTimes, setHowManyTimes] = useState(4)

  const [finalQueue, setFinalQueue] = useState([])

  const [showThis5, setShowThis5] = useState([])



  const stopOrContinue = () => setStop(!stop)

  // const savingStopData = (queue, count) => {
  //   setStopedArray(queue)
  //   setStopedCount(count)
  // }


  const generateFinalQueue = () => {
    let queue = [...theBigBangTeamQueue]

    for (let count = 1; count < howManyTimes; count++) queue = goTwoEnd(queue)

    return queue
  }

  // const whoIsNext = () => {
  //   let count = stopedCount || 1
  //   let queue = [...theBigBangTeamQueue]

  //   // if(!stop && !howManyTimes) return

  //   for (count; count < howManyTimes; count++) queue = goTwoEnd(queue)

  //   return setLastToTakeNDoubleCola(queue[0])
  // }

  useEffect(() => {
    if(!stop && !howManyTimes) return
    //generar arreglo final del algoritmo
    setFinalQueue(generateFinalQueue())

    // whoIsNext()

    // console.log(finalQueue[0])
    // return () => {
    //   clearTimeout(nextToTakeADoubleCola)
    // }
  }, [stop])


  useEffect(() => {
    if(stop) return
    //pasar de un arreglo a otro de forma progresiva
    if(showThis5.length !== finalQueue.length) {
      setTimeout(()=> {
        setShowThis5([...showThis5, finalQueue.shift()]) 
      }, 1000)
    }
    // console.log(finalQueue)

    console.log(showThis5)
  }, [finalQueue, showThis5])



  return (
    <div className="App">
      <button onClick={stopOrContinue}>{stop ? 'Continuar' : 'Detener'}</button>
      <p> quien tomo la lata nro {howManyTimes} fue {finalQueue[0]} </p>
    </div>
  )
}