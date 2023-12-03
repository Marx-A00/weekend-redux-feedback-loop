import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import axios from 'axios';
import ReviewFeedbackItem from '../ReviewFeedbackItem/ReviewFeedbackItem'


function Review(){

    const history = useHistory();
    const date = new Date();
    const feedback = useSelector(store => store.ratingInput);

    const makePostToServer = () =>{

        axios({
            method: 'POST',
            url:`/feedback`,
            data:

            {
               feeling: feedback.feelingInputToAdd,
               understanding: feedback.understandingInputToAdd,
               support: feedback.supportInputToAdd,
               comments: feedback.commentsInputToAdd,
               date: date
            }

        })
        // 
        history.push("/SubmissionSuccess");
    }

    return (

        <div>
            <h1>Review your Feedback</h1>
            <p>Feelings: {feedback.feelingInputToAdd}</p>
            <p>Understanding: {feedback.understandingInputToAdd}</p>
            <p>Support:{feedback.supportInputToAdd}</p>
            <p> Comments: {feedback.commentsInputToAdd}</p>
            <button data-testid="next" onClick={makePostToServer}>SUBMIT</button>

        </div>
    )
}
export default Review;