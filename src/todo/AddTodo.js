import React, { useState } from 'react'

function AddTodo({onAddTodo}) {

  const [title, setTitle] = useState("")

  return (
    <div>
      <input value={title} placeholder="Add todo" onChange={e => setTitle(e.target.value)} />
      <button onClick={() => {
        setTitle("")
        onAddTodo(title)
      }}>Add</button>
    </div>
  )
}

export default AddTodo
