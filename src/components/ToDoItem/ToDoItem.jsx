import React from "react";
import styles from "./ToDoItem.module.scss";
import Button from "../Button";

const ToDoItem = props => {
  const { task, dateCr, dateComp, item, removeFromDb } = props;

  return (
    <>
      <div className={styles.toDoCreator}>
        <h1>Task</h1>
        <div className={styles.container}>
          <p>{task}</p>
        </div>
        <div className={styles.container}>
          <p>
            Date created: <span>{dateCr}</span>
          </p>
        </div>
        <div className={styles.container}>
          <p>
            Completion date: <span>{dateComp}</span>
          </p>
        </div>
        <div className={styles.button}>
          <Button
            color={"#e0e008"}
            btnText={"Delete"}
            btnStyle={"delete"}
            // handleClick={on}
          />
        </div>
      </div>
    </>
  );
};

export default ToDoItem;
