import {useState} from "react";
import React from "react";

const CheckBox = (props) => {
    const courses = props.courses;
    const [checked, setChecked] = useState([])
    console.log(checked);
    const handleCheckBox = (id) => {
        setChecked(prev => {
                const isChecked = checked.includes(id);
                if (isChecked) {
                    return checked.filter(item => item !== id);
                } else {
                    return [...prev, id]
                }
            }
        )
    }
    const handleButtonClick = () => {
        console.log({id: checked})
    }
    return (
        <React.Fragment>
            {
                courses.map(course => (
                    <div key={course.id}>
                        <input
                            type='checkbox'
                            checked={checked.includes(course.id)}
                            onChange={() => handleCheckBox(course.id)}
                        />
                        {course.name}
                    </div>
                ))
            }
            <button onClick={handleButtonClick}>Submit</button>
        </React.Fragment>
    )
}
export default CheckBox;