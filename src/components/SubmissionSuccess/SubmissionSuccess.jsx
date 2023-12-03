import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";

function SubmissionSuccess() {
  const feedback = useSelector((store) => store.ratingInput);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleReset = (e) => {
    dispatch({
      type: `RESET`,
    });
    history.push("/");
  };

  return (
    <Card>
      <CardContent>
        <h1>Thank you!</h1>
        <Button
          variant="contained"
          color="primary"
          data-testid="next"
          onClick={handleReset}
        >
          Leave New Feedback
        </Button>
      </CardContent>
    </Card>
  );
}
export default SubmissionSuccess;
