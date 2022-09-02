import "./TodoStat.css";


const ToDoStat = ({todos, clearCompleted}) => {

    let finishedTodos = todos.filter((todo) => todo.done);
    

    return (
        <div className="todo-stat">
            <span>{finishedTodos.length}/{todos.length} Completed</span>
            <button onClick={clearCompleted}>Clear completed</button>
        </div>
    )
}


export default ToDoStat;