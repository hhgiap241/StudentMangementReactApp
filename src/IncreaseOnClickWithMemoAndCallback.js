import React, {memo} from "react";
import Button from 'react-bootstrap/Button';

const IncreaseOnClickWithMemoAndCallback = (props) =>{
    console.log('re-render child');
    return (
        <>
            <h1>Xin chao</h1>
            <Button onClick={props.handleIncrease} variant="primary">Click me!</Button>
        </>
    )
}
export default memo(IncreaseOnClickWithMemoAndCallback);