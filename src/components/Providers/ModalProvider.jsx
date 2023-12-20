import { createContext, useState } from "react";

const ModalProvider = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return <ModalContext.Provider value={{ setModalOpen, isModalOpen }}>{props.children}</ModalContext.Provider>;
};

export const ModalContext = createContext();
export default ModalProvider;
