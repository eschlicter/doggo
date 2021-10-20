import React, { useState, useRef } from 'react';
import { Button, View, Text } from 'react-native';

const TimerScreen = (props) => {
    const {timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset, formatTime} = props;
    console.log('timer screen props: ', props)
 return (
    <View>
        <View>
            <Text style={{alignSelf: 'center'}}>{formatTime(timer)}</Text>
            <View>
                {
                !isActive && !isPaused ?
                <Button title="start" onPress={handleStart}/> : 
                    (
                    <Button title="pause" onPress={handlePause}/>
                    )
                } 
                <Button  title="resume" onPress={handleResume}/>
                <Button title="reset" onPress={handleReset} />
            </View>
        </View>
    </View>
  );
}

export default TimerScreen;