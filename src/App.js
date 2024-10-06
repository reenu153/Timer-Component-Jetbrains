import { useEffect, useRef, useState } from 'react'
import Button from './components/button/Button'
import Timer from './components/Timer/Timer'

const App = () => {

  const intervalRef = useRef(null)
  const isPausedRef = useRef(null)
  const [title, setTitle] = useState('Stop Watch')
  const [elapsedTime, setElapsedTime] = useState({ minutes: 0, seconds: 0 })
  const [progressPercentage, setProgressPercentage] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState({
    minutes: 59,
    seconds: 59,
  })
  const [isPaused, setPaused] = useState(false)
  const [timeEnded, settimeEnded] = useState(false)

  const totalTime = 59 * 60 + 59;

  const calculateProgressPercentage = (remainingMinutes, remainingSeconds) => {
    const remainingTimeInSeconds = remainingMinutes * 60 + remainingSeconds;
    const progressPercentage = (remainingTimeInSeconds / totalTime) * 100;
    return progressPercentage.toFixed(2);
  };

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date())
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / 1000 / 60 / 60) % 24)
    if (hours) {
      settimeEnded(true);
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return {
      total,
      minutes,
      seconds,
    }
  }

  const calculateElapsedTime = (remainingMinutes, remainingSeconds) => {
    const elapsedMinutes = 59 - remainingMinutes;
    const elapsedSeconds = 59 - remainingSeconds;

    if (elapsedSeconds < 0) {
      return { minutes: elapsedMinutes - 1, seconds: 59 + elapsedSeconds };
    } else {
      return { minutes: elapsedMinutes, seconds: elapsedSeconds };
    }
  };

  
  const runTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e)
    if (total >= 0) {
      setTimeRemaining({ minutes, seconds });
      const elapsed = calculateElapsedTime(minutes, seconds);
      setElapsedTime(elapsed)
      const progress = calculateProgressPercentage(elapsed?.minutes || 0, elapsed?.seconds || 0);
      setProgressPercentage(progress)
    }
  }
  
  const startTimer = (e) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
      const id = setInterval(() => {
    if (!isPausedRef.current)
      runTimer(e)
  }, 1000)
  intervalRef.current = id
}

const pauseTimer = () => {
  if (!isPaused) {
    setPaused(true)
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null }
  } else {
    setPaused(false)
    startTimer(getDeadlineTime());
  }
}

const getDeadlineTime = () => {
  let deadline = new Date();
  deadline.setMinutes(deadline.getMinutes() + timeRemaining.minutes)
  deadline.setSeconds(deadline.getSeconds() + timeRemaining.seconds)
  return deadline
}

useEffect(() => {
  isPausedRef.current = isPaused
}, [isPaused])

  return (
    <div className="w-screen h-screen bg-[#000000] p-[24px] flex items-center justify-center">
     <div className="w-[400px] h-[400px] bg-[#26273d] rounded-[25px] flex flex-col justify-center items-center">
        <Timer
          title={title}
          timeRemaining={timeRemaining}
          elapsedTime={elapsedTime}
          progressPercentage={progressPercentage}
          timeEnded={timeEnded}
        />
       {!timeEnded?( <div className="flex items-center gap-[15px] mt-[20px]">
          <Button
            buttonTitle="Start"
            handleClick={() => {
              startTimer(getDeadlineTime({ minutes: 59, seconds: 59 }))
            }}
          />
          <Button
            buttonTitle={isPaused ? 'Resume' : 'Pause'}
            isDisabled={!elapsedTime?.minutes && !elapsedTime?.seconds}
            handleClick={() => {
              pauseTimer()
            }}
          />
          <Button
            buttonTitle="Reset"
            isDisabled={!elapsedTime?.minutes && !elapsedTime?.seconds}
            handleClick={() => {
              if (intervalRef.current) { clearInterval(intervalRef.current) }
              setTimeRemaining({ minutes: 59, seconds: 59 })
              setElapsedTime({ minutes: 0, seconds: 0 })
            }}
          />
        </div>):  <div className=' flex items-center justify-center mt-[20px]'>
          {timeEnded}
          <Button
            buttonTitle="Restart"
            handleClick={() => {
              settimeEnded(false);
              setTimeRemaining({ minutes: 59, seconds: 59 })
              setElapsedTime({ minutes: 0, seconds: 0 })
            }}
          />
        </div>}
      </div>
      {/* : (
        <div className='text-[#FFFFFF] text-[20px] flex flex-col items-center  gap-[20px] px-[40px] text-center'>
          {timeEnded}
          <Button
            buttonTitle="Restart"
            handleClick={() => {
              settimeEnded('');
              setTimeRemaining({ minutes: 59, seconds: 59 })
              setElapsedTime({ minutes: 0, seconds: 0 })
            }}
          />
        </div>
      ) */}
    </div>
  )
}

export default App
