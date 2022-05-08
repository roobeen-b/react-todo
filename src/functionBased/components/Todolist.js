import React from "react";
import Todoitem from "./Todoitem";

const Todolist = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <Todoitem
            key={todo.id}
            todo={todo}
            handleChangeProps={props.handleChangeProps}
            deleteProps={props.deleteProps}
            setUpdate={props.setUpdate}
          />
        ))}
      </ul>
    </div>
  );
};
export default Todolist;
