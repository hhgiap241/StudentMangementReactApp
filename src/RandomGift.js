import React, {useState} from "react";

const RandomGift = (props) =>{
    const gifts = props.gifts;
    const [gift, setGift] = useState("Chua co phan thuong");

    const handleClick = () =>{
        const max = gifts.length;
        const min = 0;
        const index = Math.floor(Math.random() * (max - min) + min);
        setGift(gifts[index]);
    }

    return (
        <div>
            <h1>{gift}</h1>
            <button onClick={handleClick}>Lay thuong</button>
        </div>
    )

}
export default RandomGift;