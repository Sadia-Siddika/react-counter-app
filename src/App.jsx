import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    // increment the count if the increment button is clicked

    const increment = () => {
        setCount(count + 1);
    };

    // decrement the count if the decrement button is clicked

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default App;