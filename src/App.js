
import './App.css';
import BookEditForm from "./InformationForm";

function App() {
    const book = {
        title: "Chemistry"
    }
    return (
        <div className="wrapper">
            <BookEditForm book = {book}/>
        </div>
    );
}

export default App;
