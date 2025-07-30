import classes from "./Modal.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate(".."); // Navigate back to the previous page
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal} role="dialog" aria-modal="true">
        {children}
      </dialog>
    </>
  );
}

export default Modal;
