import React from "react";
import styles from "./Modal.module.css";
import { Overlay } from "../Overlay";

interface ModalProps {
  show?: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  onButton1Click: React.MouseEventHandler<HTMLButtonElement>;
  onButton2Click?: React.MouseEventHandler<HTMLButtonElement>;
  buttonOneText: string;
  buttonTwoText?: string;
  title?: string;
  description?: string;
  imgSrc?: string;
}

function Modal({
  onClose,
  onButton1Click,
  onButton2Click,
  buttonOneText,
  buttonTwoText,
  title,
  description,
  imgSrc,
}: ModalProps) {
  return (
    <Overlay>
      <div className={styles.modalContent}>
        {/* Close icon section */}
        <span
          onClick={onClose}
          className={styles.closeButton}
          data-testid={"modal-button-close"}
        >
          &#x2715;
        </span>
        {/* Image secion */}
        {imgSrc && (
          <img src={imgSrc} alt="modal image" width={25} height={25} />
        )}
        <div className={styles.modalTextContainer}>
          {/* Title and description section */}
          <h3 className={styles.title}>{title || "Default Modal Title"}</h3>
          <p className={`${styles.description} body-1`}>
            {description ||
              "default test for the description section of the modal"}
          </p>
          {/* Buttons container section */}
          <div className={styles.buttonContainer}>
            <button
              data-testid="modal-button-1"
              onClick={onButton1Click}
              className={`${styles.actionButton} body-2`}
            >
              {buttonOneText || "default button1 text"}
            </button>
            {onButton2Click && (
              <button
                data-testid="modal-button-2"
                onClick={onButton2Click}
                className={`${styles.actionButton} body-2`}
              >
                {buttonTwoText || "default button2 text"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Overlay>
  );
}

export default Modal;
