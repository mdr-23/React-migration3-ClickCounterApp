import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)

  const showCount = (e) => {
    e.preventDefault()
    let sum = count + 1
    let increaseNumber = sum
    setCount(increaseNumber)
  }

  return (
    <div className="App">

        <h1>Contador de Clicks</h1>

        <div className="counter">{count}</div>

        <button className="btn" onClick={showCount}>Incrementar</button>

    </div>
  );
}

export default App;
