import {useState} from "react";

function BookTitle(props){
    console.log("onTitleChange = ",props.onTitleChange );
    return (
        <label>
            Title:
            <input onChange = {props.onTitleChange} value={props.title} />
        </label>
    )
}

function BookEditForm(props){
    const [title, setTitle] = useState(props.book.title)

    function handleTitleChange(evt){
        setTitle(evt.target.value);
    }
    console.log("handleTitleChange = ",handleTitleChange);

    return (
        <form>
            <BookTitle onTitleChange = {handleTitleChange} title={title}/>
        </form>
    )
}
export default BookEditForm;