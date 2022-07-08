import React, {useRef, useState} from "react";

export const CountDownWithStopBtn = () => {
    const [countDown, setCountDown] = useState(60);
    const interval = useRef();
    const handleStopBtn = () => {
        clearInterval(interval.current);
        console.log('stop: ', interval);
    }
    const handleStartBtn = () => {
       interval.current = setInterval(() => {
            setCountDown(prev => prev - 1)
        }, 1000);
        console.log('start: ', interval.current);
    }

    return(
        <div>
            <h1>{countDown}</h1>
            <button onClick={handleStartBtn}>Start</button>
            <button onClick={handleStopBtn}>Stop</button>
        </div>
    )
}