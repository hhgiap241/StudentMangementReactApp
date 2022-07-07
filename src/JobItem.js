import React from "react";

const JobItem = (props) => {
    const jobs = props.jobs;
    console.log(jobs);
    return (
        <ul className="job-list">
            {
                jobs.map((item, index) => {
                    return <li key = {index}>{item}</li>
                })
            }
        </ul>
    )
}
export default JobItem;