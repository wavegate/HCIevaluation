import classes from "../styles/Form.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import GraphicalPassword from "./GraphicalPassword";
import TextPassword from "./TextPassword";
import { useState, useEffect } from "react";

const Form = (props) => {
  const [formData, setFormData] = useState({});
  const [startTime, setStartTime] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(new Date() - startTime);
    setStartTime();
    setFormData({});
    if (props.password === formData.password) {
      // complete
      // alert("password is correct");
      console.log("correct");
    } else {
      // show error
    }
  };
  const handleChange = ({ target }) => {
    if (!startTime) {
      setStartTime(new Date());
    }
    setFormData({ ...formData, [target.name]: target.value });
  };
  const handleClick = (color) => {
    if (!startTime) {
      setStartTime(new Date());
    }
    let code;
    switch (color) {
      case "orange":
        code = "O";
        break;
      case "blue":
        code = "B";
        break;
      case "green":
        code = "G";
        break;
      case "yellow":
        code = "Y";
        break;
      case "pink":
        code = "P";
        break;
      case "silver":
        code = "S";
        break;
      default:
        break;
    }
    setFormData({
      ...formData,
      password: (formData.password ? formData.password : "") + code,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <Paper elevation={2} className={classes.Form}>
      <form onSubmit={handleSubmit} className={classes.form}>
        {props.variant === "text" && <TextPassword onChange={handleChange} />}
        {props.variant === "graphical" && (
          <GraphicalPassword onChange={handleChange} onClick={handleClick} />
        )}
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
