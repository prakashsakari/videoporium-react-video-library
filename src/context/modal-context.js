import { createContext, useContext, useReducer } from "react";
import { modalReducer } from "../reducer";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [{ isModalOpen, isFormOpen, playlistName }, modalDispatch] = useReducer(
    modalReducer,
    {
      isModalOpen: false,
      isFormOpen: false,
      playlistName: ""
    }
  );
  return (
    <ModalContext.Provider
      value={{ isModalOpen, isFormOpen, playlistName, modalDispatch }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { useModal, ModalProvider };
