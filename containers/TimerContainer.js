import React, { useState, useRef } from 'react';
import { Button, View, Text } from 'react-native';
import TimerScreen from '../components/TimerScreen';


const TimerContainer = function TimerContainer (props) {

    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const increment = useRef(null)
    
  
    const handleStart = () => {
      setIsActive(true)
      setIsPaused(true)
      increment.current = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)
    }
  
    const handlePause = () => {
      clearInterval(increment.current)
      setIsPaused(false)
    }
  
    const handleResume = () => {
      setIsPaused(true)
      increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
    }
  
    const handleReset = () => {
      clearInterval(increment.current)
      setIsActive(false)
      setIsPaused(false)
      setTimer(0)
    }
  
    const formatTime = () => {
      const getSeconds = `0${(timer % 60)}`.slice(-2)
      const minutes = `${Math.floor(timer / 60)}`
      const getMinutes = `0${minutes % 60}`.slice(-2)
      return `${getMinutes} : ${getSeconds}`
    }

    return(
        <View>
            <TimerScreen 
                timer={timer} 
                isActive={isActive} 
                isPaused={isPaused} 
                handleStart={handleStart} 
                handlePause={handlePause} 
                handleResume={handleResume} 
                handleReset={handleReset} 
                formatTime={formatTime}
            />
        </View>
        
    )
};

export default TimerContainer;