import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";

function Comments() {
  const history = useHistory();

  const [comments, setComments] = useState("");

  const dispatch = useDispatch();

  const handleCommentsInput = (e) => {
    setComments(e.target.value);
  };
  const handleNextSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: `SET_COMMENTS`,
      payload: comments,
    });
    history.push("/review");
  };
  return (
    <Card>
      <CardContent>
        <h1>any comments you'd like to share?</h1>
        <Box
          component="form"
          onSubmit={handleNextSubmit}
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            type="text"
            value={comments}
            onChange={handleCommentsInput}
            id="standard-basic"
            label="comments?"
            variant="standard"
          />
        </Box>

        <Button
          disableElevation
          onClick={handleNextSubmit}
          variant="contained"
          data-testid="next"
          color="primary"
        >
          NEXT
        </Button>
      </CardContent>
    </Card>
  );
}
export default Comments;
