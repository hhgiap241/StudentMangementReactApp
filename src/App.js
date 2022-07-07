
import './App.css';
import JobInput from "./JobInput";
import JobItem from "./JobItem";
import {useState} from "react";


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
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'));
        return storageJobs ?? [];
    })
    const handleButtonAddJob = (event) => {
        // jobs.push(event.target.value);
        const job = event.target.value;
        setJobs((prev) => {
                const newJobs = [...prev, job];
                localStorage.setItem('jobs', JSON.stringify(newJobs));
                return newJobs;
            }
        );
    }
    return (
        <div className="App">
            <JobInput onValueChange = {handleButtonAddJob}/>
            <JobItem jobs = {jobs}/>
        </div>
    );
}

export default App;
