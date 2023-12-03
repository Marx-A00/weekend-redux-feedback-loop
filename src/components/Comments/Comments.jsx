import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
function Comments(){

    const history = useHistory();

    const [comments,setComments] = useState("")

    const dispatch = useDispatch();

    const handleCommentsInput=(e)=>{
        setComments(e.target.value);
    }
    const handleNextSubmit = (e)=>{
        e.preventDefault();
        dispatch({
            type:`SET_COMMENTS`,
            payload:comments
        })
        history.push("/review");
    }
    return(
        <div>
            <h1>Any Comments you want to leave?</h1>
            <form onSubmit={handleNextSubmit}>
                <input
                data-testid="input"
                value={comments}
                onChange={handleCommentsInput}
                type="text"/>
                <button data-testid="next" >NEXT</button>
                </form>
        </div>
    )

}
export default Comments;