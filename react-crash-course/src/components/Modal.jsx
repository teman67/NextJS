import classes from "./Modal.module.css";
import { useEffect } from "react";

function Modal({ children, onClose }) {
  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal} role="dialog" aria-modal="true">
        {children}
      </dialog>
    </>
  );
}

export default Modal;
