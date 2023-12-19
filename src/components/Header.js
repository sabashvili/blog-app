import classes from "./Header.module.css";
import redberryLogo from "../Images/redberry-logo.png";

const Header = () => {
  return (
    <header>
      <div className={classes["header-container"]}>
        <img src={redberryLogo} alt="redberry logo" className={classes["main-header-logo"]} />
        <a href="/" className={classes["login-btn"]}>
          შესვლა
        </a>
      </div>
    </header>
  );
};

export default Header;
