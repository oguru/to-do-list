import React from "react";
import styles from "./Button.module.scss";

const Button = props => {
  const { btnStyle, btnText, handleClick, color, noBorder } = props;

  const buttonStyle = `styles.${btnStyle}`;

  return (
      <button
        onClick={handleClick}
        className={`
          ${buttonStyle} 
          ${styles.button} 
          ${styles[color]} 
          ${styles[noBorder]}`}>
        {btnText}
      </button>
  );
};

export default Button;
