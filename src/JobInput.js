import React, {useState} from "react";

const JobInput = (props) => {
    const  [value, setValue] = useState('');
    return (
        <div className="input-item">
            <input type="text" placeholder="input job" value={value} onChange={(e) => {
                setValue(e.target.value)
            }}/>
            <button onClick={props.onValueChange} value={value}>Add to job list</button>
        </div>
    );
}
export default JobInput;