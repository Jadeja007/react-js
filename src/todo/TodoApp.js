import { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];
let nextId = 3;
const TodoApp = () => {

  const [todo, setTodo] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodo(
      [...todo,
      {
        id: nextId++,
        title: title,
        done: false
      }
      ]
    )
  }

  function handleChangeTodo(nextTodo) {
    setTodo(
      todo.map(it => {
        if (it.id === nextTodo.id) {
          return nextTodo;
        } else {
          return it;
        }
      })
    )
  }

  function handleDeleteTodo(todoId) {
    setTodo(
      todo.filter(it => it.id !== todoId)
    )
  }

  return (
    <div>
      <h2>Todo App</h2>
      <AddTodo  onAddTodo={handleAddTodo}/>
      <TaskList todo={todo} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo}/>
    </div>
  )
}

export default TodoApp;