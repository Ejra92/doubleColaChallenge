import React, { useEffect, useState } from 'react'

import TheWinnerIs from './TheWinnerIS'
import PersonsInQueue from './PersonsInQueue'
import ActionsTools from './ActionsTools'

import './styles.scss'


let theBigBangTeamQueue = ['sheldon', 'leonard', 'penny', 'rajesh', 'howard']

const goTwoEnd = queue => {
  const whosNextToTakeDoubleCola = queue.shift()

  return queue = [...queue, whosNextToTakeDoubleCola, whosNextToTakeDoubleCola]
}

const movingTheQueue = set => {
  theBigBangTeamQueue = goTwoEnd(theBigBangTeamQueue)

  console.log(theBigBangTeamQueue)

  set(theBigBangTeamQueue)
}

const delay = s => new Promise(r => setTimeout(() => r(), s))


export default function App() {
  const [stop, setStop] = useState(true)

  const [count, setCount] = useState(1)
  
  const [howManyTimes, setHowManyTimes] = useState()
  
  const [flag, setFlag] = useState(false)

  const [showThis5, setShowThis5] = useState(theBigBangTeamQueue)

  const [lastToTakeNDoubleCola, setLastToTakeNDoubleCola] = useState('')


  useEffect(() => {
    (async () => {
      if(stop || !howManyTimes) return

      if(count >= howManyTimes) return setLastToTakeNDoubleCola(theBigBangTeamQueue[0])
      
      setFlag(false)
      
      await delay(1000)

      setCount(count + 1)
    })()

    return () => clearTimeout(delay)
  }, [stop, flag])


  useEffect(() => {
    if(count > 1) movingTheQueue(setShowThis5)
    if(!stop) setFlag(true)
  }, [count])


  const onHowManyChanges = e => setHowManyTimes(e.target.value)

  const stopOrContinue = () => setStop(!stop)

  const restart = () => {
    setLastToTakeNDoubleCola('')

    setCount(1)

    theBigBangTeamQueue = ['sheldon', 'leonard', 'penny', 'rajesh', 'howard']

    setShowThis5(theBigBangTeamQueue)

    setStop(true)
  }


  const actionsToolsProps = {
    onHowManyChanges, 
    count, 
    howManyTimes, 
    stopOrContinue, 
    restart,
    showThis5,
    stop,
    lastToTakeNDoubleCola
  }


  return (
    <div className="App">
      <h1>Double Cola App</h1>

      {lastToTakeNDoubleCola && <TheWinnerIs name={lastToTakeNDoubleCola} howManyTimes={howManyTimes} restart={restart} />}

      <PersonsInQueue showThis5={showThis5}/>

      <ActionsTools {...actionsToolsProps} />
    </div>
  )
}