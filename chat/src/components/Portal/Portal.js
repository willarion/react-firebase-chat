import { createPortal } from "react-dom";

export const Portal = ({ children }) => {
  const modalRoot = document.getElementById("portal");

  return modalRoot && createPortal(children, modalRoot);
};
