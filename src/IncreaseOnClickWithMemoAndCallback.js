import React, {memo} from "react";

const IncreaseOnClickWithMemoAndCallback = (props) =>{
    console.log('re-render child');
    return (
        <>
            <h1>Xin chao</h1>
            <button onClick={props.handleIncrease}>Click me!</button>
        </>
    )
}
export default memo(IncreaseOnClickWithMemoAndCallback);