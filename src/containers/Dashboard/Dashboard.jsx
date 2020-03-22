import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import Button from "../../components/Button";
import ToDoCreator from "../../components/ToDoCreator";
import ToDoItem from "../../components/ToDoItem";
import { firestore } from "../../firebase.js";

const Dashboard = () => {
  const [items, updateItems] = useState([]);
  const [newTask, addTask] = useState("");
  const [completionDate, setDate] = useState("");
  const [docCount, addDocCount] = useState(1);

  console.log(docCount);

  let currentDate = new Date();
  let shortDateCr = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;

  useEffect(() => {
    // first load up page...
    fetchData();
  }, []);

  const fetchData = () => {
    // firestore
    //   .collection("data")
    //   .doc("to-do")
    //   .get()
    //   .then(item => {
    //     updateItems(item.data().items);
    //     console.log(item.data().docCount);
    //     addDocCount(item.data().docCount);
    //   });
    firestore
      .collection("data")
      .get()
      .then(querySnapshot => {
        const array = [];
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, "is the id for ->", doc.data());
          array.push(doc.data());
          addDocCount(doc.data().docCount);
        });
        updateItems(array);
      });
  };

  const addToDb = () => {
    // addDocCount(docCount + 1);
    // console.log(docCount);

    const newDoc = {
      task: newTask,
      dateCr: shortDateCr,
      complDate: completionDate,
      docCount: docCount + 1
    };

    firestore
      .collection("data")
      .doc(`Item ${docCount + 1}`)
      .set(newDoc)
      .then(() => {
        fetchData();
        addDocCount(docCount + 1);
      });
  };

  // const addToDb = () => {
  //   const newItems = [
  //     ...items,
  //     { task: { newTask } },
  //     { dateCr: { shortDateCr } },
  //     { complDate: { completionDate } },
  //   ];

  //   const newDoc = {
  //     items: newItems
  //     docCount:
  //   };

  //   firestore
  //     .collection("data")
  //     .doc("to-do")
  //     .set(newDoc)
  //     .then(() => {
  //       fetchData();
  //     });
  // };

  const toDoNotes = () => {
    items.forEach(item => <ToDoItem item={item} />);
  };

  return (
    <>
      <section className={styles.mainPage}>
        <ToDoCreator
          addToDb={addToDb}
          addTask={addTask}
          setDate={setDate}
          shortDateCr={shortDateCr}
        />
        <div className={styles.toDoNotes}>{toDoNotes}</div>
      </section>
    </>
  );
};

export default Dashboard;
