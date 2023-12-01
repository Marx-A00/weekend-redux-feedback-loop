import React from 'react';
import axios from 'axios';
import './App.css';
import {useDispatch} from "react-redux";
import {useState} from 'react'

function App() {
  const [feeling, setFeeling] = useState(0);
  const dispatch = useDispatch();

  const handleFeelingInput=(e)=>{
    setFeeling(e.target.value);
  }

  const handleNextSubmit =(e)=>{
    e.preventDefault();

    dispatch({
      type: `SET_FEELING`,
      payload: feeling
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <h1>How are you feeling today?</h1>

      <form onSubmit={handleNextSubmit}>
        <input
        value={feeling}
        onChange={handleFeelingInput}
        type="number"
        />
        <button>NEXT</button>
        </form>
    </div>
  );
}

// input with form submission?

export default App;
