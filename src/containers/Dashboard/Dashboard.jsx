import React, {useEffect, useState} from "react";
import styles from "./Dashboard.module.scss";
import Button from "../../components/Button"
import ToDoCreator from "../../components/ToDoCreator";
import { firestore } from "../../firebase.js";


const Dashboard = () => {
  
  const [items, updateItems] = useState([]);
  const [newItem, additem] = useState("");

  useEffect(() => {
    // first load up page...
    fetchData();
  }, []);

  const fetchData = () => {
    firestore
      .collection("data")
      .doc("todo")
      .get()
      .then(item => {
        updateItems(item.data());
      });
  };

  const addToDb = () => {
    
    const newItems = [...items, newItem];
  
    const newDoc = {
      items: newItems
    };
  
    firestore
      .collection("data")
      .doc("people")
      .set(newDoc)
      .then(() => {
        fetchData();    
      });
  }

  const addFromCreator = additem;

  return (
    <>
    <section className={styles.mainPage}>
      <ToDoCreator addToDb={addToDb} addItem={addFromCreator} />
      {/* <Button color={"blue"} /> */}
    </section>
    </>
  );
};

export default Dashboard;
