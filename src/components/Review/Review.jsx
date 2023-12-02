import { useSelector } from "react-redux";
import axios from 'axios';
import ReviewFeedbackItem from '../ReviewFeedbackItem/ReviewFeedbackItem'


function Review(){

    const feedback = useSelector(store => store.ratingInput);

    const makePostToServer = () =>{
        axios({
            method: 'POST',
            url:`/`
        })

    }

    return (

        <div>
            <h1>Review your Feedback</h1>
            <p>Feelings: {feedback.feelingInputToAdd}</p>
            <p>Understanding: {feedback.understandingInputToAdd}</p>
            <p>Support:{feedback.supportInputToAdd}</p>
            <p> Comments: {feedback.commentsInputToAdd}</p>
            <button>SUBMIT</button>

        </div>
    )
}
export default Review;