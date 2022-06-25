import './App.css';
import React from "react"

function App() {
  const [time, setTime] = React.useState(0)
  const [timeon,setTimer] = React.useState(false)

  React.useEffect(() => {
    let interval = null;
    if (timeon){
      interval = setInterval(() => {
        setTime(time => time + 1)
      },10 )
    }else{
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timeon])

  return (
    <div className="App">
      <div>
        <span>{('0'+ Math.floor((time / 6000) % 60)).slice(-2)}:</span>
        <span>{('0'+ Math.floor((time / 100) % 60)).slice(-2)}:</span>
        <span>{('0'+ Math.floor(time % 100)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={() => setTimer(true)}>Start</button>
        <button onClick={() => setTimer(false)}>Stop</button>
        <button onClick={() => setTimer(true)}>Resume</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
