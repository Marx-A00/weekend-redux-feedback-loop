import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";

function Support() {
  const history = useHistory();

  const [support, setSupport] = useState(0);
  const dispatch = useDispatch();

  const handleSupportInput = (e) => {
    setSupport(e.target.value);
  };

  const handleNextSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: `SET_SUPPORT`,
      payload: support,
    });
    history.push("/comments");
  };

  return (
    <Card>
      <CardContent>
        <h1>How well are you being supported?</h1>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            helperText="enter a number 1-5"
            type="number"
            value={support}
            onChange={handleSupportInput}
            id="standard-basic"
            label="supported?"
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

export default Support;
