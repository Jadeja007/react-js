import React, { useState } from "react";

function TaskList({ todo, onChangeTodo, onDeleteTodo }) {
  return (
    <div>
      <ul>
        {todo.map((item) =>
         <li key={item.id}>
          <Task item={item} onChangeTodo={onChangeTodo} onDeleteTodo={onDeleteTodo}/>
          </li>
        )}
      </ul>
    </div>
  );
}

export default TaskList;

function Task({item, onChangeTodo, onDeleteTodo}) {
  const [isEdit, setIsEdit] = useState(false);

  let todoContent;
  if(isEdit) {
    todoContent = (
      <>
      <input value={item.title} onChange={(e) => onChangeTodo({...item, title: e.target.value})}/>
      <button onClick={() => setIsEdit(false)}>save</button>
      </>
    )
  } else {
    todoContent = (
      <>
        {item.title}
        <button onClick={() => setIsEdit(true)}>Edit</button>
      </>
    )
  }

  return (
    <div>
      <input type="checkbox" />
      {todoContent}
      <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
    </div>
  )
}
