import React, { useState } from "react";
import styles from "./ToDoCreator.module.scss";
import Button from "../Button";

const ToDoCreator = props => {
  const { addToDb, addItem, addTask, setDate, shortDateCr } = props;

  return (
    <>
      <div className={styles.toDoCreator}>
        <h1>Add To Do Item Here!</h1>
        <div className={styles.container}>
          <label for="task">Task: </label>
          <input
            onInput={event => addTask(event.target.value)}
            type="text"
            name="task"
            className={styles.task}
          />
        </div>
        <div className={styles.container}>
          <p>
            Date created: <span>{shortDateCr}</span>
          </p>
        </div>
        <div className={styles.container}>
          <label for="date">Completion date: </label>
          <input
            type="text"
            name="date"
            onInput={event => setDate(event.target.value)}
          />
        </div>
        <div className={styles.button}>
          <Button
            color={"#e0e008"}
            btnText={"Add!"}
            btnStyle={"add"}
            handleClick={() => {
              addToDb();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ToDoCreator;
