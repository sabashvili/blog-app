import classes from "./LoginModal.module.css";
import closeBtnIcon from "../../Images/close-btn-icon.svg";
import CustomModal from "./CustomModal";
import EmailErrorMessage from "../ErrorMessages/EmailErrorMessage";
import { ModalContext } from "../Providers/ModalProvider";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useState } from "react";
import { login } from "../../API";

const LoginModal = () => {
  const modalCtx = useContext(ModalContext);
  const loginCtx = useContext(AuthContext);
  const [enteredEmail, setEnderedEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const emailChangeHandler = (e) => {
    setEnderedEmail(e.target.value);
  };

  const emailFormSubmitHandler = (e) => {
    e.preventDefault();

    const isValid = enteredEmail.endsWith("@redberry.ge") && enteredEmail.length > "@redberry.ge".length;
    setIsValidEmail(isValid);
    if (isValid) {
      attamptLogin();
    }
  };

  const attamptLogin = () => {
    login(enteredEmail).then((res) => {
      if (res.status === 204) {
        loginCtx.setAuthorized(true);
      } else if (res.status === 422) {
        loginCtx.setAuthorized(false);
        setIsValidEmail(false);
      }
    });
  };

  return (
    <CustomModal isOpen={modalCtx.isModalOpen}>
      <div className={classes["login-modal"]}>
        <button
          onClick={() => modalCtx.setModalOpen(false)}
          className={classes["login-modal-close-btn"]}
        >
          <img
            className={classes["login-modal-close-icon"]}
            src={closeBtnIcon}
            alt="close button"
          />
        </button>
        <h1 className={classes["login-modal-title"]}>შესვლა</h1>
        <form>
          <label
            className={classes["login-email-label"]}
            htmlFor="login-email-input"
          >
            ელ-ფოსტა
          </label>
          <input
            onChange={emailChangeHandler}
            placeholder="Example@redberry.ge"
            type="mail"
            className={`${classes["login-email-input"]} ${isValidEmail ? "" : classes["error-border"]}`}
            id="login-email-input"
          />
          {isValidEmail ? "" : <EmailErrorMessage message={"ელ-ფოსტა არ მოიძებნა"} />}
          <button
            onClick={emailFormSubmitHandler}
            type="submit"
            className={classes["login-btn"]}
          >
            შესვლა
          </button>
        </form>
      </div>
    </CustomModal>
  );
};

export default LoginModal;
