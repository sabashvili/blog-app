import Modal from "react-modal";
import { useEffect } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "none",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(26, 26, 31, 0.24)",
    width: "100vw",
    height: "100vh",
  },
};

function CustomModal(props) {
  useEffect(() => {
    Modal.setAppElement("#root");
    return () => {
      Modal.setAppElement(null);
    };
  }, []);

  document.body.style.overflow = props.isOpen ? "hidden" : "auto";

  return (
    <Modal
      isOpen={props.isOpen}
      style={customStyles}
    >
      {props.children}
    </Modal>
  );
}

export default CustomModal;
