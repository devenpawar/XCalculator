import React from "react";
import { Grid, Button, Paper, Typography } from "@mui/material";
import { useState } from "react";

function Calculator() {
  const [value, setValue] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [finalAnswer, setFinalAnswer] = useState("");

  const submitHandler = () => {
    if (value === "") setFinalAnswer("Error");
    else setFinalAnswer(eval(value));
    setIsSubmit(true);
  };

  const clearHandler = () => {
    setValue("");
    setIsSubmit(!isSubmit);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        height: "65vh", // Full viewport height
        width: "100vw", // Full viewport width
      }}
    >
      <Paper
        elevation={4}
        style={{
          padding: 20,
          width: 300,
          borderRadius: 10,
          textAlign: "center",
        }}
      >
        {
          <input
            type="text"
            value={value}
            style={{
              marginBottom: 20,
              padding: 5,
              height: 30,
              textAlign: "right",
              lineHeight: "30px",
              fontSize: "24px",
              textAlign: "center",
            }}
          />
        }
        {isSubmit && (
          <div
            style={{
              marginBottom: 20,
              border: "none",
              padding: 5,
              height: 30,
              textAlign: "right",
              lineHeight: "30px",
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            {" "}
            {finalAnswer}{" "}
          </div>
        )}
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Button
              variant="primary"
              value="7"
              style={{
                padding: 20,
                textAlign: "center",
                border: "2px black solid",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              onClick={(e) => setValue(value + e.target.value)}
            >
              7
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="primary"
              value="8"
              style={{
                padding: 20,
                textAlign: "center",
                border: "2px black solid",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              onClick={(e) => setValue(value + e.target.value)}
            >
              8
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="primary"
              value="9"
              style={{
                padding: 20,
                textAlign: "center",
                border: "2px black solid",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              onClick={(e) => setValue(value + e.target.value)}
            >
              9
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="primary"
              value="+"
              style={{
                padding: 20,
                textAlign: "center",
                border: "2px black solid",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              onClick={(e) => setValue(value + e.target.value)}
            >
              +
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="primary"
              value="4"
              style={{
                padding: 20,
                textAlign: "center",
                border: "2px black solid",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              onClick={(e) => setValue(value + e.target.value)}
            >
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="primary"
              value="5"
              style={{
                padding: 20,
                textAlign: "center",
                border: "2px black solid",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              onClick={(e) => setValue(value + e.target.value)}
            >
              5
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="primary"
              value="6"
              style={{
                padding: 20,
                textAlign: "center",
                border: "2px black solid",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              onClick={(e) => setValue(value + e.target.value)}
            >
              6
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="primary"
              value="-"
              style={{
                padding: 20,
                textAlign: "center",
                border: "2px black solid",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              onClick={(e) => setValue(value + e.target.value)}
            >
              -
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="primary"
              value="1"
              style={{
                padding: 20,
                textAlign: "center",
                border: "2px black solid",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              onClick={(e) => setValue(value + e.target.value)}
            >
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="primary"
              value="2"
              style={{
                padding: 20,
                textAlign: "center",
                border: "2px black solid",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              onClick={(e) => setValue(value + e.target.value)}
            >
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="primary"
              value="3"
              style={{
                padding: 20,
                textAlign: "center",
                border: "2px black solid",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              onClick={(e) => setValue(value + e.target.value)}
            >
              3
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="primary"
              value="*"
              style={{
                padding: 20,
                textAlign: "center",
                border: "2px black solid",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              onClick={(e) => setValue(value + e.target.value)}
            >
              *
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="primary"
              style={{
                padding: 20,
                textAlign: "center",
                border: "2px black solid",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                width: "100%",
              }}
              onClick={clearHandler}
            >
              C
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="primary"
              value="0"
              style={{
                padding: 20,
                textAlign: "center",
                border: "2px black solid",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                width: "100%",
              }}
              onClick={(e) => setValue(value + e.target.value)}
            >
              0
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="primary"
              style={{
                padding: 20,
                textAlign: "center",
                border: "2px black solid",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              onClick={submitHandler}
            >
              =
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="primary"
              value="/"
              style={{
                padding: 20,
                textAlign: "center",
                border: "2px black solid",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              onClick={(e) => setValue(value + e.target.value)}
            >
              /
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Calculator;
