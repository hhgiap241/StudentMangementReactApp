import React, {useReducer, useRef} from "react";
import {Button} from "react-bootstrap";
// use reducer
// 1. init state
const initState = {
    job: '',
    jobs: []
};
// 2.actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const REMOVE_JOB = 'remove_job';

const setJob = payload => {
    return {
        type: SET_JOB,
        payload: payload
    }
}
const addJob = payload => {
    return {
        type: ADD_JOB,
        payload: payload
    }
}
const removeJob = payload => {
    return {
        type: REMOVE_JOB,
        payload: payload
    }
}
// 3. reducer
const reducer = (state, action) => {
    console.log('Action: ', action);
    console.log('Prev state: ', state);
    let newState;
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break;
        case ADD_JOB:
            console.log('value = ', [...state.jobs, action.payload]);
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break;
        case REMOVE_JOB:
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload, 1);
            newState = {
                ...state,
                jobs: newJobs
            }
            break;
        default:
            throw new Error('Invalid action');
    }
    console.log('New state: ', newState);
    return newState;
}
const TodoAppWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const {job, jobs} = state;
    console.log(job, jobs);
    const handleAddJob = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));
        ref.current.focus();
    }
    const handleRemoveJob = (index) => {
        dispatch(removeJob(index));
    }
    const ref = useRef();
    return (
        <div style={{padding: '0 20px'}}>
            <h3>Todo</h3>
            <input
                ref={ref}
                placeholder='enter job'
                value={job}
                onChange={e => {
                    dispatch(setJob(e.target.value));
                }}
            />
            <button onClick={
                handleAddJob
            }>Add
            </button>
            <ul>
                {
                    jobs.map((job, index) => {
                        return (
                            <li key={index}>
                                {job}
                                <Button variant='danger'
                                        size='sm'
                                        style={{margin: '10px 10px'}}
                                        onClick={() => handleRemoveJob(index)}
                                >Remove
                                </Button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default TodoAppWithReducer;