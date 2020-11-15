import React, { useEffect, useState } from 'react'

let theBigBangTeamQueue  = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']

const goTwoEnd = queue => {
  const whosNextToTakeDoubleCola = queue.shift()

  return queue = [...queue, whosNextToTakeDoubleCola, whosNextToTakeDoubleCola]
}


export default function App() {
  const [stop, setStop] = useState(true)

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

  useEffect(() => {
    if(!stop && !howManyTimes) return
    //generar arreglo final del algoritmo
    setFinalQueue(generateFinalQueue())
  }, [stop])

  
  let nextToTakeADoubleCola

  const whoIsNext = () => {
    if(finalQueue.length === 0) return setLastToTakeNDoubleCola(showThis5[0])

    if(finalQueue.length > 0) {
      nextToTakeADoubleCola = setTimeout(()=> {
        setShowThis5([...showThis5, finalQueue.shift()]) 
      }, 1000)
    }
  }

  useEffect(() => {
    if(stop) return
    
    //pasar de un arreglo a otro de forma progresiva
    whoIsNext()
    console.log(showThis5)

    return () => {
      clearTimeout(nextToTakeADoubleCola)
    }
  }, [finalQueue, showThis5])



  return (
    <div className="App">
      <button onClick={stopOrContinue}>{stop ? `${showThis5.length === 0 ? 'Iniciar' : 'Continuar'}` : 'Detener'}</button>
      <p> quien tomo la lata nro {howManyTimes} fue {lastToTakeNDoubleCola} </p>
    </div>
  )
}