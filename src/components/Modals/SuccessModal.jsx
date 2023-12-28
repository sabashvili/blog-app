import classes from "./SuccessModal.module.css";
import CustomModal from "./CustomModal";
import { useContext } from "react";
import { ModalContext } from "../Providers/ModalProvider";
import closeBtnIcon from "../../Images/close-btn-icon.svg";
import successModalIcon from "../../Images/success-modal-icon.svg";
import { Link } from "react-router-dom";

const SuccessModal = (props) => {
  const modalCtx = useContext(ModalContext);

  return (
    <CustomModal isOpen={modalCtx.isModalOpen}>
      <div className={classes["success-modal"]}>
        <Link to="/" className={classes["return-starter-page"]}>
          <button
            onClick={() => modalCtx.setModalOpen(false)}
            className={classes["success-modal-close-btn"]}
          >
            <img
              className={classes["success-modal-close-icon"]}
              src={closeBtnIcon}
              alt="close button"
            />
          </button>
        </Link>
        <img
          className={classes["success-modal-icon"]}
          src={successModalIcon}
          alt="success"
        />

        <h1 className={classes["success-modal-title"]}>{props.title}</h1>
        <Link to="/">
          <button
            type="submit"
            className={classes["success-btn"]}
            onClick={() => modalCtx.setModalOpen(false)}
          >
            {props.btnText}
          </button>
        </Link>
      </div>
    </CustomModal>
  );
};

export default SuccessModal;
