
import './App.css';
import ToDoList from "./components/ToDoList/TodoList";
import {Routes, Route} from 'react-router-dom';
import {useState} from "react";
import AddToDoField from "./components/AddToDos/AddToDo";
import ToDoStat from "./components/TodoStat/ToDoStat";




function App(props) {
  const [todos, setTodos] = useState([
  ]);
  
  const [todoCount, setToDoCount] = useState(todos.length);

  function addToDo(text){

    let newToDo = {
      title:text,
      done:false,
      id:Math.random()    
    };

    setTodos([
      ...todos,newToDo
    ]);
    setToDoCount(todos.length);
  }

  function onChange(newTodo) {
    setTodos(todos.map(todo => {
      if(todo.id === newTodo.id){
        return newTodo;
      }
      return todo;
    }));
  }



  function onDelete(todo){
    setTodos(todos.filter(el => el.id !== todo.id));
  }


  return (
    <div className="todo-container">
    <AddToDoField addToDo={addToDo}/>
    <ToDoList todos={todos} onChange={onChange} onDelete={onDelete}/>
    <ToDoStat todos={todos} clearCompleted={() => {
      setTodos(todos.filter((todo) => !todo.done))
  
      }}/>
    </div>
    
  )
}

export default App;
