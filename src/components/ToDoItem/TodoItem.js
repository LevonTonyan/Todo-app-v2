import "./../ToDoItem/TodoItem.css";


const ToDoItem = ({todo, onChange, onDelete}) => {
    return (
        <div className="todo-item">
            <input className="todo-checkbox"type="checkbox" checked={todo.done} onChange={(e) => {
                onChange({
                    ...todo,
                    done:e.target.checked
                })}
                }/>
            <p className="todo-title">{todo.title}</p>
            <button onClick={() => {onDelete(todo)}} className="todo-remove">X</button>
        </div>
    )
}
export default ToDoItem;