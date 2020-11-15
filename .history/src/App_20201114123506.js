import React, { useEffect, useState } from 'react'

let theBigBangTeamQueue  = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']

const goTwoEnd = queue => {
  const whosNextToTakeDoubleCola = queue.shift()

  return queue = [...queue, whosNextToTakeDoubleCola, whosNextToTakeDoubleCola]
}


export default function App() {
  const [stop, setStop] = useState(true)

  const [lastToTakeNDoubleCola, setLastToTakeNDoubleCola] = useState('')

  const [howManyTimes, setHowManyTimes] = useState(6)

  const [finalQueue, setFinalQueue] = useState([])

  const [showThis5, setShowThis5] = useState([])


  const generateFinalQueue = () => {
    let queue = [...theBigBangTeamQueue]

    for (let count = 1; count < howManyTimes; count++) queue = goTwoEnd(queue)
    
    return queue
  }

  useEffect(() => {
    if(!stop && !howManyTimes) return alert('Es necesario agregar una cantidad de veces que se van a tomar dobles cola')

    //generar arreglo final del algoritmo
    if(finalQueue.length === 0) return setFinalQueue(generateFinalQueue())
  }, [stop])

  
  let nextToTakeADoubleCola

  const whoIsNext = () => finalQueue.length === 0 ? setLastToTakeNDoubleCola(showThis5[0]) : nextToTakeADoubleCola = setTimeout(()=> setShowThis5([...showThis5, finalQueue.shift()]), 1000)

  useEffect(() => {
    if(stop) return
    
    //pasar de un arreglo a otro de forma progresiva
    whoIsNext()

    console.log(showThis5)

    return () => {
      clearTimeout(nextToTakeADoubleCola)
    }
  }, [finalQueue, showThis5])

  const stopOrContinue = () => setStop(!stop)

  return (
    <div className="App">
      <button onClick={stopOrContinue}>{stop ? `${showThis5.length === 0 ? 'Iniciar' : 'Continuar'}` : 'Detener'}</button>
      
      {stop && showThis5.length > 0 && finalQueue.length > 0 && 
        <button onClick={() => {
          setLastToTakeNDoubleCola('')
          setFinalQueue([])
          setShowThis5([])
        }}>
          Reiniciar
        </button>}
      
      <p> quien tomo la lata nro {howManyTimes} fue {lastToTakeNDoubleCola} </p>
    </div>
  )
}