import classes from "./EmailErrorMessage.module.css";
import errorCircleIcon from "../../Images/error-circle-icon.svg";

const EmailErrorMessage = (props) => {
  return (
    <div className={classes["error-container"]}>
      <img
        className={classes["error-circle-icon"]}
        src={errorCircleIcon}
        alt="red circle"
      />
      <p>{props.message}</p>
    </div>
  );
};

export default EmailErrorMessage;
