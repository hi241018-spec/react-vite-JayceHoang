import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
const App = () => {


  const [todoList, setTodoList] = useState(
    [
      // {
      //   id: 1, name: "Learn React"
      // }, {
      //   id: 2, name: " ƯEWda"
      // }
    ]

  )
  const addNewTodo = (name) => {
    function randomIntFromInterval(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const newTodo = {
      id: randomIntFromInterval(0, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo]);

  }
  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id)
    setTodoList(newTodo);
  }
  return (
    <div className="todo-container">
      <div className="todo-title"> Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        todoList={todoList}
        deleteTodo={deleteTodo}
      />
      <div className='todo-image'>
        <img src={reactLogo} />
      </div>
    </div>
  )
}

export default App