import React, { useState } from "react";


function ListItem({ list, onChange, onDelete }) {
  return (
    <div>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <Task list={item} onChange={onChange} onDelete={onDelete}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListItem;


function Task({ list, onChange, onDelete }) {
  let EditContent;

  const [isEdit, setIsEdit] = useState(false);

  if (isEdit) {
    EditContent = (
      <>
        <input value={list.text} onChange={(e) => {onChange({...list, text: e.target.value})}}/>
        <button onClick={()=> setIsEdit(false)}> Save </button>
      </>
  )} else {
    EditContent = (
      <>
      {list.text}
      <button onClick={()=>setIsEdit(true)}> Edit </button>
      </>
    )
  }

  return (
    <>
      <input type="checkbox" checked={list.done} onChange={(e) => onChange({...list, done: e.target.checked})}/>
      {EditContent}
      <button onClick={()=>onDelete(list.id)}>Delete</button>
    </>
  );
}