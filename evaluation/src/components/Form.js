import classes from "../styles/Form.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const Form = () => {
  const handleSubmit = () => {};
  return (
    <Paper elevation={12}>
      <form onSubmit={handleSubmit} className={classes.Form}>
        <TextField id="filled-basic" label="Email/ID" variant="filled" />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
