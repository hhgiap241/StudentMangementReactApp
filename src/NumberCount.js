import React, {useState} from "react";

const Heading = React.memo(function (){
    console.log('heading re-render');
    return (
        <h1>Counting numbers: </h1>
    )
});

const NumberCount = () =>{

    const [number, setNumber] = useState(0);

    const buttonHandler =()=>{
        setNumber(number + 1);
    }
    console.log("numbercount re-render");
    return (
        <div>
            <Heading/>
            <button onClick={buttonHandler}>Click Me</button>
            <h1>{number}</h1>
        </div>
    )
}
export default NumberCount;