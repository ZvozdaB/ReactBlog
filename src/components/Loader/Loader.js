import classes from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={classes.container}>
      <span className={classes.circle}></span>
      <span className={classes.circle}></span>
      <span className={classes.circle}></span>
      <span className={classes.circle}></span>
    </div>
  );
}
