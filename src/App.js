import React, { useState } from 'react';
import Todo from "./components/Todo";
import './App.css';


function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!value) return;
    addTodo(value);
    setValue('');
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
      className="input" 
      value={value} 
      placeholder="Add Todo"
      onChange={ e => setValue(e.target.value)} />
    </form>
  )
  
}

function App () {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false,
    },
    {
      text: 'Learn about React Hooks',
      isCompleted: false,
    },
    {
      text: 'Build to do app',
      isCompleted: false,
    }
]);

const addTodo = text => {
  const newTodos = [...todos, {text}];
  setTodos(newTodos);
}

const completeTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
}

const deleteTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);

}


return (
  <div className="app"> 
    <h3>
      Simple Sample for React Hooks 
    </h3>
    <div className="todo-list">{todos.map((todo, index) => (
      <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
    ))}
    <TodoForm addTodo={addTodo}/>
  </div>
  </div>
)
}
export default App;