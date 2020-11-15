import React, { useEffect, useState } from 'react'

let theBigBangTeamQueue = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']

const goTwoEnd = queue => {
  const whosNextToTakeDoubleCola = queue.shift()

  return queue = [...queue, whosNextToTakeDoubleCola, whosNextToTakeDoubleCola]
}


export default function App() {
  const [stop, setStop] = useState(true)

  const [count, setCount] = useState(0)
  
  const [howManyTimes, setHowManyTimes] = useState(10)
  
  const [flag, setFlag] = useState(false)

  const [showThis5, setShowThis5] = useState([])

  const [lastToTakeNDoubleCola, setLastToTakeNDoubleCola] = useState('')
  
  
  // const [finalQueue, setFinalQueue] = useState([])


  const movingTheQueue = () => {
    setCount(count + 1)
    theBigBangTeamQueue = goTwoEnd(theBigBangTeamQueue)

    setShowThis5(theBigBangTeamQueue)
  }


  useEffect(() => {
    setFlag(false)

    console.log(flag)
    
    if(stop) return

    console.log(stop)

    console.log(showThis5)

    movingTheQueue()
  }, [stop, flag])

  useEffect(() => {
    console.log(howManyTimes, count)
    if(howManyTimes === count) return setLastToTakeNDoubleCola(showThis5[0])
    console.log(count)
    setFlag(true)
  }, [count])


  // const generateFinalQueue = () => {
  //   let queue = [...theBigBangTeamQueue]

  //   for (let count = 1; count < howManyTimes; count++) queue = goTwoEnd(queue)
    
  //   return queue
  // }

  // useEffect(() => {
  //   if(!stop && !howManyTimes) return alert('Es necesario agregar una cantidad de veces que se van a tomar dobles cola')

  //   //generar arreglo final del algoritmo
  //   if(showThis5.length === 0) return setFinalQueue(generateFinalQueue())
  // }, [stop])

  
  // let nextToTakeADoubleCola

  // const whoIsNext = () => finalQueue.length === 0 ? setLastToTakeNDoubleCola(showThis5[0]) : nextToTakeADoubleCola = setTimeout(()=> setShowThis5([finalQueue.pop(), ...showThis5]), 1000)

  // useEffect(() => {
  //   if(stop) return
    
  //   //pasar de un arreglo a otro de forma progresiva
  //   whoIsNext()

  //   console.log(showThis5)

  //   return () => {
  //     clearTimeout(nextToTakeADoubleCola)
  //   }
  // }, [stop, finalQueue, showThis5])



  const stopOrContinue = () => setStop(!stop)

  const reset = () => {
    setLastToTakeNDoubleCola('')
    // setFinalQueue([])
    setCount(0)
    setShowThis5([])
    setStop(true)
    theBigBangTeamQueue = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']
  }

  return (
    <div className="App">
      <button onClick={stopOrContinue}>{stop ? `${showThis5.length === 0 ? 'Iniciar' : 'Continuar'}` : 'Detener'}</button>
      
      {showThis5.length > 0 && 
        <button onClick={reset}>
          Reiniciar
        </button>}
      
      <p> quien tomo la lata nro {howManyTimes} fue {lastToTakeNDoubleCola} </p>

      <p>{showThis5.length > 0 && showThis5[0]} </p>

      <p>{showThis5.length > 1 && showThis5[1]} </p>

      <p>{showThis5.length > 2 && showThis5[2]} </p>

      <p>{showThis5.length > 3 && showThis5[3]} </p>

      <p>{showThis5.length > 4 && showThis5[4]} </p>
    </div>
  )
}