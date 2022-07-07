
import './App.css';
import RadioButton from "./RadioButton";
import CheckBox from "./CheckBox";


const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'JavaScript'
    },
    {
        id: 3,
        name: 'ReactJS'
    }
];

function App() {
    return (
        <div className="App">
            <RadioButton courses = {courses}/>
            <CheckBox courses = {courses}/>
        </div>
    );
}

export default App;
