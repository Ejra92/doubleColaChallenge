import React, { useEffect, useState } from 'react'


let theBigBangTeamQueue = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']

const goTwoEnd = queue => {
  const whosNextToTakeDoubleCola = queue.shift()

  return queue = [...queue, whosNextToTakeDoubleCola, whosNextToTakeDoubleCola]
}

const movingTheQueue = set => {
  theBigBangTeamQueue = goTwoEnd(theBigBangTeamQueue)

  console.log(theBigBangTeamQueue)

  set(theBigBangTeamQueue)
}


export default function App() {
  const [stop, setStop] = useState(true)

  const [count, setCount] = useState(1)
  
  const [howManyTimes, setHowManyTimes] = useState(52)
  
  const [flag, setFlag] = useState(false)

  const [showThis5, setShowThis5] = useState(theBigBangTeamQueue)

  const [lastToTakeNDoubleCola, setLastToTakeNDoubleCola] = useState('')


  const delay = () => new Promise(r => setTimeout(() => r(), 1000))


  useEffect(() => {
    (async () => {
      if(stop) return

      if(count >= howManyTimes) return setLastToTakeNDoubleCola(theBigBangTeamQueue[0])
      
      setFlag(false)
      
      await delay()

      setCount(count + 1)
    })()

    return () => clearTimeout(delay)
  }, [stop, flag])


  useEffect(() => {
    if(count > 1 && !stop) movingTheQueue(setShowThis5)
    setFlag(true)
  }, [count])


  const stopOrContinue = () => setStop(!stop)

  const reset = () => {
    setLastToTakeNDoubleCola('')
    setCount(1)
    setShowThis5(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'])
    setStop(true)
    theBigBangTeamQueue = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']
  }

  return (
    <div className="App">
      {count !== howManyTimes && <button onClick={stopOrContinue}>{stop ? `${showThis5.length === 5 ? 'Iniciar' : 'Continuar'}` : 'Detener'}</button>}
      
      {showThis5.length !== 5 && count > 1 && 
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