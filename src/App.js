
import './App.css';
import RandomGift from "./RandomGift";


function App() {
    console.log('App re-render');
    const gifts = [
        'CPU',
        'RAM',
        'Keyboard'
    ];
    return (
        <div className="App">
            <RandomGift gifts = {gifts}/>
        </div>
    );
}

export default App;
