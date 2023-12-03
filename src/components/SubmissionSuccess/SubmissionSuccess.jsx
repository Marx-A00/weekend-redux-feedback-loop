import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import {Link,useHistory} from "react-router-dom";

function SubmissionSuccess(){
    const feedback = useSelector(store => store.ratingInput);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleReset = (e)=>{
        dispatch({
            type: `RESET`
        })
        history.push("/");
    }

    return(
        <>
        <h1>Thank you!</h1>
        <button data-testid="next" onClick={handleReset}>Leave New Feedback</button>
        </>
    )
}
export default SubmissionSuccess;