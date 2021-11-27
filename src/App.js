import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';

const App = () => {

  const [counter, setCounter] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [timer, setTimer] = useState(30);
  const [scores, setScores] = useState([]);

  const clickFunc = () => {
    if (timer!=0){
      setAnimation(true);     
    setCounter(counter+1);
    }  
  }

  function decrementTimer() {
    setTimeout(() => {
      setTimer(timer-1)
    }, 1000)
  }
  for (let i=0; i<30;i++){
    if (timer>0){
      decrementTimer()
    }
  }

  const handleReset = () => {
    let newScores = [...scores, counter];
    setScores(newScores);
    setCounter(0);
    setTimer(30);

  }
  
  return(
    <div className="mainContainer">
    <h1> Croissant Clicker</h1>
    <button className={animation ? 'BigAnimated' : 'theBigOne'} onClick={clickFunc} onAnimationEnd={()=>setAnimation(false)}>&#129360;</button>
    <h2>Score: {counter}</h2>
    <h2>Time remaining: {timer}</h2>
    <h2>High Score: </h2>
    <h2>{scores.length==0? "No scores yet" : scores.sort(function(a, b){return b-a})[0]}</h2>
    <button className="restartButton" onClick={()=>{handleReset()}} disabled={timer==0?"":"true"}>Restart</button>
    </div>
  )
}
  
export default App;
