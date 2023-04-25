import React, { useContext, useState } from "react";
import { TasksContext, TasksDispatchContext } from "./context";

function ListItem() {
  const list = useContext(TasksContext);

  return (
    <div>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <Task list={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListItem;

function Task({ list }) {
  let EditContent;

  const dispatch = useContext(TasksDispatchContext);

  const [isEdit, setIsEdit] = useState(false);

  if (isEdit) {
    EditContent = (
      <>
        <input
          value={list.text}
          onChange={(e) => {
            dispatch({
              type: "Editing",
              list: {
                ...list,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEdit(false)}> Save </button>
      </>
    );
  } else {
    EditContent = (
      <>
        {list.text}
        <button onClick={() => setIsEdit(true)}> Edit </button>
      </>
    );
  }

  return (
    <>
      <input
        type="checkbox"
        checked={list.done}
        onChange={(e) =>
          dispatch({
            type: "Editing",
            list: {
              ...list,
              done: e.target.checked,
            },
          })
        }
      />
      {EditContent}
      <button
        onClick={() =>
          dispatch({
            type: "Delete",
            id: list.id,
          })
        }
      >
        Delete
      </button>
    </>
  );
}
