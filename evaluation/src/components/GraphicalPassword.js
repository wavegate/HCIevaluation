import classes from "../styles/GraphicalPassword.module.scss";
import variables from "../styles/colors.module.scss";
import { useState, useEffect, Fragment } from "react";

const GraphicalPassword = (props) => {
  const [colors, setColors] = useState();
  const randomizeColors = () => {
    const colors = ["pink", "blue", "green", "yellow", "orange", "silver"];
    colors.sort(() => Math.random() - 0.5);
    setColors(colors);
  };
  useEffect(() => {
    randomizeColors();
  }, []);
  const handleClick = (color) => {
    randomizeColors();
    props.onClick(color);
  };
  return (
    <div className={classes.GraphicalPassword}>
      {colors && (
        <Fragment>
          <div
            className={classes.box1}
            style={{ background: variables[colors[0]] }}
            onClick={() => handleClick(colors[0])}
          ></div>
          <div
            className={classes.box2}
            style={{ background: variables[colors[1]] }}
            onClick={() => handleClick(colors[1])}
          ></div>
          <div
            className={classes.box3}
            style={{ background: variables[colors[2]] }}
            onClick={() => handleClick(colors[2])}
          ></div>
          <div
            className={classes.box4}
            style={{ background: variables[colors[3]] }}
            onClick={() => handleClick(colors[3])}
          ></div>
          <div
            className={classes.box5}
            style={{ background: variables[colors[4]] }}
            onClick={() => handleClick(colors[4])}
          ></div>
          <div
            className={classes.box6}
            style={{ background: variables[colors[5]] }}
            onClick={() => handleClick(colors[5])}
          ></div>
        </Fragment>
      )}
    </div>
  );
};

export default GraphicalPassword;
