import './App.css';
// import BucketList from './Example/BucketList';
// import MyProfile, { Toolbar } from './Profile';
// import {RenderList} from './RenderList';
// import Sculpture from './sculpture';
// import TodoApp from './todo/TodoApp';
// import PasswordField from './Example/Hooks/useState'
import UseReducerFn from "./Example/Hooks/useReducer";
import React from 'react';
import Home from './Example/todoReducer/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* < PasswordField /> */}
       {/* <h1>App</h1> */}
       {/* <MyProfile /> */}
        {/* <RenderList /> */}
      {/* <Toolbar /> */}
      {/* <Sculpture /> */}
      {/* <BucketList /> */}
      {/* <TodoApp /> */}
      {/* <UseReducerFn  /> */}
      <Home />
      </header>
    </div>
  );
}

export default App;
