import React from "react";
import styles from "./ToDoItem.module.scss";
import Button from "../Button";

const ToDoItem = props => {
  const {color, complDate, dateCr, task, removeFromDb } = props;

  return (
    <>
      <div className={`${styles.toDoItem} ${styles[color]}`}>
        <div className={styles.container}>
          <label>Task:</label>
          <textarea readOnly>{task}</textarea>
        </div>
        <div className={styles.container}>
          <p>
            Date created:<span>{dateCr}</span>
          </p>
        </div>
        <div className={styles.container}>
          <p>
            Completion date: <span>{complDate}</span>
          </p>
        </div>
        <div className={styles.button}>
          <Button
            color={color}
            btnText={"Delete"}
            btnStyle={"delete"}
            handleClick={removeFromDb}
            noBorder={"noBorder"}
          />
        </div>
      </div>
    </>
  );
};

export default ToDoItem;
