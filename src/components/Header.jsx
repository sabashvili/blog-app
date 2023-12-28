import classes from "./Header.module.css";
import redberryLogo from "../Images/redberry-logo.png";
import { useContext } from "react";
import { ModalContext } from "./Providers/ModalProvider";
import { AuthContext } from "./Providers/AuthProvider";
import LoginModal from "./Modals/LoginModal";
import SuccessModal from "./Modals/SuccessModal";
import { Link } from "react-router-dom";

const Header = () => {
  const modalCtx = useContext(ModalContext);
  const authCtx = useContext(AuthContext);

  const loginClickHandler = () => {
    modalCtx.setModalOpen(true);
  };

  return (
    <>
      {authCtx.authorized ? (
        <SuccessModal title="წარმატებული ავტორიზაცია" btnText="კარგი" />
      ) : (
        <LoginModal />
      )}
      <header>
        <div className={classes["header-container"]}>
          <img
            src={redberryLogo}
            alt="redberry logo"
            className={classes["main-header-logo"]}
          />

          {authCtx.authorized ? (
            <Link to="/blog_create" className={classes["login-btn"]}>
              დაამატე ბლოგი
            </Link>
          ) : (
            <button
              onClick={loginClickHandler}
              className={classes["login-btn"]}
            >
              შესვლა
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
