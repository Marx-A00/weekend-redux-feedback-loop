import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";

function Feeling() {
  const history = useHistory();

  const [feeling, setFeeling] = useState(0);
  const dispatch = useDispatch();

  const handleFeelingInput = (e) => {
    setFeeling(e.target.value);
  };

  const handleNextSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: `SET_FEELING`,
      payload: feeling,
    });
    history.push("/understanding");
  };

  return (
    <Card>
      <CardContent>
        <h1>How are you feeling today?</h1>
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
            helperText="enter a number 1-5"
            type="number"
            value={feeling}
            onChange={handleFeelingInput}
            id="standard-basic"
            label="Feeling?"
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
export default Feeling;
