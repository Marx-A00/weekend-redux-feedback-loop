import { useDispatch } from "react-redux";
import {useHistory } from "react-router-dom";
import { useState } from "react";


function Understanding(){
    const history = useHistory();

    const [understanding, setUnderstanding] = useState(0);
    const dispatch = useDispatch();

    // const pushToSupport = () =>{
    //     history.push("/support");
    // }

    const handleUnderstandingInput = (e)=>{
        setUnderstanding(e.target.value);
    }
    const handleNextSubmit = (e) =>{
        e.preventDefault();

        dispatch({
            type: `SET_UNDERSTANDING`,
            payload: understanding
        })
        history.push("/support");
    }


    return (
        <div>
        <h1>How is your understanding?</h1>
        <form onSubmit={handleNextSubmit}>
            <input
            value={understanding}
            onChange={handleUnderstandingInput}
            type="number" />
          <button>NEXT</button>
          </form>
        </div>
    )
}
export default Understanding;
