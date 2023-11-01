
import { useSyncExternalStore } from "react";

import {todosStore} from './todoStore'

import './App.css';

function App() {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot)

  return (
    <div>
      <button onClick={() => {
        todosStore.addTodo()
      }}>Add Todo</button>
      <hr />
      <ul>
        {todos.map(todo => (<li key={todo.id}>{todo.text}</li>))}
      </ul>
    </div>
  );
}

export default App;
