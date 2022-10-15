import TextField from "@mui/material/TextField";

const TextPassword = (props) => {
  return (
    <TextField
      label="Password"
      type="password"
      onChange={props.onChange}
      name="password"
      autoFocus
    />
  );
};

export default TextPassword;
