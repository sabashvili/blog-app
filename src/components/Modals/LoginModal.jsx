import classes from "./LoginModal.module.css";
import closeBtnIcon from "../../Images/close-btn-icon.svg";
import CustomModal from "./CustomModal";
import { ModalContext } from "../Providers/ModalProvider";
import { useContext } from "react";

const LoginModal = () => {
  const modalCtx = useContext(ModalContext);

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
            placeholder="Example@redberry.ge"
            type="mail"
            className={classes["login-email-input"]}
            id="login-email-input"
          />
          <button className={classes["login-btn"]}>შესვლა</button>
        </form>
      </div>
    </CustomModal>
  );
};

export default LoginModal;
