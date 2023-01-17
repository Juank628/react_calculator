import React, { useState } from 'react';
import styles from './TodoItem.module.css';

function TodoItem(props) {
  const [editing, setEditing] = useState(false);

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (e) => {
    if (e.key === "Enter") setEditing(false) 
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type='checkbox'
          className={styles.checkbox}
          checked={props.todo.completed}
          onChange={() => props.handleChangeProps(props.todo.id)}
        />
        {props.todo.title}
        <button onClick={() => props.deleteTodoProps(props.todo.id)}>
          Delete
        </button>
      </div>
      <input
        type='text'
        style={editMode}
        className={styles.textInput}
        onChange={(e) => props.setUpdate(e.target.value, props.todo.id)}
        onKeyDown={(e)=> handleUpdatedDone(e)}
      />
    </li>
  );
}

export default TodoItem;
