import React from "react";
import styles from "./PostItNote.module.scss";
import ToDoItem from "../../components/ToDoItem"

const PostItNote = () => {

  return (
      <div className={styles.postIt}>
        <ToDoItem />
      </div>
  );
};

export default PostItNote;
