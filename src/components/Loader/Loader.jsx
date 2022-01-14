import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.container}>
      <span className={classes.circle}></span>
      <span className={classes.circle}></span>
      <span className={classes.circle}></span>
      <span className={classes.circle}></span>
    </div>
  );
};

export { Loader };
