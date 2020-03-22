import React from "react";
import styles from "./Button.module.scss";

const Button = props => {
  const { btnStyle, btnText, handleClick, color } = props;

  const buttonStyle = `styles.${btnStyle}`;

  return (
    <>
      <button
        onClick={handleClick}
        className={`${buttonStyle} ${styles.button}`}
        style={{ backgroundColor: `${color}` }}
      >
        {btnText}
      </button>
    </>
  );
};

export default Button;
