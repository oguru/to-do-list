import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import ToDoCreator from "../../components/ToDoCreator";
import ToDoItem from "../../components/ToDoItem";
import { firestore } from "../../firebase.js";

const Dashboard = () => {
  const [items, updateItems] = useState([]);
  const [newTask, addTask] = useState("");
  const [completionDate, setDate] = useState("");
  const [stickyColor, changeColor] = useState("yellow");

  let currentDate = new Date();
  let shortDateCr = `
    ${currentDate.getDate()}
    /${currentDate.getMonth()}
    /${currentDate.getFullYear()}`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    firestore
      .collection("data")
      .orderBy("fullDate")
      .get()
      .then(querySnapshot => {
        const array = [];

        querySnapshot.forEach(doc => {
          const id = (doc.id);
          const addId = { ...doc.data(), id: id };
          array.push(addId);
        });
        updateItems(array);
      });
  };

  const addToDb = () => {

    const dateAdded = new Date();

    const newDoc = {
      task: newTask,
      dateCr: shortDateCr,
      complDate: completionDate,
      color: stickyColor,
      fullDate: dateAdded
    };

    firestore
      .collection("data")
      .doc()
      .set(newDoc)
      .then(() => {
        fetchData();
      });
  };

  const removeFromDb = (item) => {

    firestore
      .collection("data")
      .doc(item.id)
      .delete()
      .then(() => fetchData())
  };


  return (
    <section className={styles.mainPage}>
      <div className={styles.toDoNotes}>
        <ToDoCreator
          storeColor={changeColor}
          addToDb={addToDb}
          addTask={addTask}
          setDate={setDate}
          shortDateCr={shortDateCr}
        />
        {items.map(item => {
          return <div><ToDoItem
            complDate={item.complDate}
            dateCr={item.dateCr}
            task={item.task}
            color={item.color}
            removeFromDb={() => removeFromDb(item)}
          /></div>
        })}
      </div>
    </section>
  );
};

export default Dashboard;
