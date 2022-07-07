import React, {useState} from "react";

const RadioButton = (props) => {
    const courses = props.courses;
    const [checked, setChecked] = useState(1)
    console.log(checked);
    const handleButtonClick = () => {
        console.log({id: checked, name: courses[checked - 1].name})
    }
    return (
        <React.Fragment>
            {
                courses.map(course => (
                    <div key={course.id}>
                        <input
                            type='radio'
                            checked={checked === course.id}
                            onChange={() => setChecked(course.id)}
                        />
                        {course.name}
                    </div>
                ))
            }
            <button onClick={handleButtonClick}>Submit</button>
        </React.Fragment>
    )


}
export default RadioButton;