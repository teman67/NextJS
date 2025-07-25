import classes from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.spinner}></div>
      <p>Loading posts...</p>
    </div>
  );
}

export default LoadingSpinner;
