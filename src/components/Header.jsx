import classes from "./Header.module.css";
import redberryLogo from "../Images/redberry-logo.png";
import { useContext } from "react";
import { ModalContext } from "./Providers/ModalProvider";

const Header = () => {
  const modalCtx = useContext(ModalContext);

  const loginClickHandler = () => {
    modalCtx.setModalOpen(true);
  };

  return (
    <header>
      <div className={classes["header-container"]}>
        <img
          src={redberryLogo}
          alt="redberry logo"
          className={classes["main-header-logo"]}
        />
        <button
          onClick={loginClickHandler}
          className={classes["login-btn"]}
        >
          შესვლა
        </button>
      </div>
    </header>
  );
};

export default Header;
