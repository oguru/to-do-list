import React, {useState} from "react";
import styles from "./ToDoCreator.module.scss";
import Button from "../Button"

const ToDoCreator = (props) => {
const {addToDb, addFromCreator} = props

const [newTask, addTask] = useState("");

let currentDate = new Date();
console.log(newTask);

  return (
    <>
      <div className={styles.toDoCreator}>
        <h1>Add To Do Item Here!</h1>
        <div className={styles.container}>
          <label for="task">Task: </label>
          <input onInput={(event) => addTask(`Task: ${event.target.value}`)} type="text" name="task" className={styles.task}/>
        </div>
        <div className={styles.container}>
          <p>Date created: <span>{`${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`}</span></p>
        </div>
        <div className={styles.container}>
          <label for="date">Completion date: </label>
          <input type="text" name="date"/>
        </div>
        <div className={styles.button}>
          <Button color={"#e0e008"} btnText={"Add!"} btnStyle={"add"} handleClick={addFromCreator}/>
        </div>
      </div>
    </>
  );
};

export default ToDoCreator;
