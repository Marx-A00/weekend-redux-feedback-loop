import React from 'react';
import axios from 'axios';
import './App.css';
import {useDispatch} from "react-redux";
import {useState} from 'react'

function App() {
  const dispatch = useDispatch();


  // const addFeelingRatingToStore = (e) =>{
  //   dispatch({
  //     type: `STORE_FEELING_RATING`,
  //     payload: 
  //   })
  // }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <h1>How are you feeling today?</h1>
      {/* FORM --> on submit */}
      <form onSubmit={addFeelingRatingToStore}>
        <input
        onChange={(e)=> setFeedbackInput(e.target.value)}
        type="number"
        />
        <button>NEXT</button>
        </form>
    </div>
  );
}

// input with form submission?

export default App;
