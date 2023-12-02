import {Link,useHistory} from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Feeling(){
    const history = useHistory();

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
      history.push("/understanding");
    }


    return (
        <div>

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
    )
}
export default Feeling;


