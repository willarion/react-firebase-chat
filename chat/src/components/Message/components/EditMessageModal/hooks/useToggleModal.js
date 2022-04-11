import { useState } from "react";

export const useToggleModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleEditModal = () => {
    setOpenModal(!openModal);
  };

  return { toggleEditModal, openModal };
};
