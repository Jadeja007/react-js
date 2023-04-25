import React, { useState } from 'react'

function AddTodos({onAdd}) {
  const [text, setText] = useState('')
  // console.log(text)
  return (
    <div>
      <input placeholder='AddTask' value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={() => {
        onAdd(text)
        // setText("")
      }}> Add List </button>
    </div>
  )
}

export default AddTodos
