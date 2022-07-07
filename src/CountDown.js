import React, {useEffect, useState} from "react";

const CountDown = () => {
    const [value, setValue] = useState(10);
    console.log('re-render');
    useEffect(() => {
        const interval = setInterval(() => {
            setValue(prev => {
                if (prev === 0){
                    clearInterval(interval);
                    return 0;
                }else{
                    return prev - 1;
                }
            });
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <h1>{value}</h1>
    )
}
export default CountDown;