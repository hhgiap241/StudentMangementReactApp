import './App.css';
import IncreaseOnClickWithMemoAndCallback from "./IncreaseOnClickWithMemoAndCallback";
import {useCallback, useState} from "react";


function App() {
    const [count, setCount] = useState(0);
    console.log('re-render parent');
    const handleIncrease = useCallback(() => {
        setCount(count + 1)
    }, []);
    return (
        <div className="App">
            <IncreaseOnClickWithMemoAndCallback handleIncrease={handleIncrease}/>
            <h1>{count}</h1>
        </div>
    );
}

export default App;
