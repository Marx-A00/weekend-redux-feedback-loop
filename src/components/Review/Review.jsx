import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ReviewFeedbackItem from "../ReviewFeedbackItem/ReviewFeedbackItem";
import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import Paper from '@mui/material/Paper';

function Review() {
  const history = useHistory();
  const date = new Date();
  const feedback = useSelector((store) => store.ratingInput);

  const makePostToServer = () => {
    axios({
      method: "POST",
      url: `/feedback`,
      data: {
        feeling: feedback.feelingInputToAdd,
        understanding: feedback.understandingInputToAdd,
        support: feedback.supportInputToAdd,
        comments: feedback.commentsInputToAdd,
        date: date,
      },
    });
    //
    history.push("/SubmissionSuccess");
  };

  return (
    <Card sx={{ minWidth: 275 }}>
        <Paper>
      <CardContent>
        <h1>Review your Feedback</h1>
        <p>Feelings: {feedback.feelingInputToAdd}</p>
        <p>Understanding: {feedback.understandingInputToAdd}</p>
        <p>Support:{feedback.supportInputToAdd}</p>
        <p> Comments: {feedback.commentsInputToAdd}</p>
        <Button
          variant="contained"
          data-testid="next"
          onClick={makePostToServer}
        >
          SUBMIT
        </Button>
      </CardContent>
      </Paper>
    </Card>
  );
}
export default Review;
