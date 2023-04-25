import React, { useReducer } from 'react'
import AddTodos from './AddTodos'
import ListItem from './ListItem';

function Home() {

let index = 3;
  const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
  ];

  const [state, dispatch] = useReducer(taskReducer, initialTasks);

  function addHandler(text) {
     dispatch({
      type: 'Added',
      id: index+1,
      text: text
     })
  }

  function changeHandler(list) {
    dispatch({
      type: 'Editing',
      list: list
    })
  }

  function deleteHandler(listId) {
    dispatch({
      type: 'Delete',
      id: listId
    })
  }

  return (
    <div>
      <AddTodos onAdd={addHandler}/>
      <ListItem list={state} onChange={changeHandler} onDelete={deleteHandler}/>
    </div>
  )
}

export default Home


function taskReducer(state, action) {
  switch(action.type) {
    case 'Added' : {
      return (
        [...state, 
        {
          id: action.id,
          text: action.text,
          done: false
        }
        ]
      )
    }
    case 'Editing' : {
      return state.map(t => {
        if (t.id === action.list.id) {
          return action.list;
        } else {
          return t;
        }
      })
    }
    case 'Delete' : {
      return state.filter(i => i.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}