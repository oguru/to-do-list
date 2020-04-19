import React, { useState, useEffect } from "react";
import styles from "./ToDoCreator.module.scss";
import Button from "../Button";

const ToDoCreator = props => {
  const { addToDb, addTask, setDate, shortDateCr, storeColor } = props;

  const [color, changeColor] = useState("yellow");

  useEffect(() => {
    storeColor(color);
  });

  return (
    <section className={`${styles.toDoCreator} ${styles[color]}`}>
      <h1>Add To Do Item Here!</h1>

      <div className={styles.container}>
        <label for="task">Task: </label>
        <textarea
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

      <div className={styles.colorButtons}>
        <button
          onClick={() => changeColor("yellow")}
          style={{ backgroundColor: "#faee30" }}></button>
        <button
          onClick={() => changeColor("blue")}
          style={{ backgroundColor: "#6bbbe5" }}></button>
        <button
          onClick={() => changeColor("green")}
          style={{ backgroundColor: "#90d457" }}></button>
        <button
          onClick={() => changeColor("orange")}
          style={{ backgroundColor: "#f9c276" }}></button>
        <button
          onClick={() => changeColor("pink")}
          style={{ backgroundColor: "#f99fcb" }}></button>
      </div>

      <div className={styles.button}>
        <Button
          color={color}
          btnText={"Add!"}
          btnStyle={"add"}
          handleClick={() => {
            addToDb();
          }} />
      </div>

    </section>
  );
};

export default ToDoCreator;
