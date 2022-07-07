import './App.css';
import PostItem from "./PostItem";
import {useEffect, useState} from "react";


// const courses = [
//     {
//         id: 1,
//         name: 'HTML, CSS'
//     },
//     {
//         id: 2,
//         name: 'JavaScript'
//     },
//     {
//         id: 3,
//         name: 'ReactJS'
//     }
// ];

function App() {
    const [showGoToTop, setShowGoToTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    const goToTopHandler = () => {
        window.scrollTo(0, 0);
        setShowGoToTop(false);
    }
    return (
        <div className="App">
            <PostItem/>
            {
                showGoToTop && (
                    <button
                        style={{
                            position: 'fixed',
                            right: 20,
                            bottom: 20
                        }}
                        onClick={goToTopHandler}
                    >Go to top
                    </button>
                )
            }
        </div>
    );
}

export default App;
