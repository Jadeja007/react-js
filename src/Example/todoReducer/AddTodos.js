import React, { useContext, useState } from 'react'
import { TasksContext, TasksDispatchContext } from './context';

function AddTodos({onAdd}) {
  let index = 3;
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);
  // console.log(text)
  return (
    <div>
      <input placeholder='AddTask' value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={() => {
        // onAdd(text)
        setText("");
        dispatch({
          type: "Added",
          id: index++,
          text: text,
        })
      }}> Add List </button>
    </div>
  )
}

export default AddTodos
