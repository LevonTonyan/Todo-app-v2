import "./ToDoList.css";
import TodoItem from "./../ToDoItem/TodoItem";




const ToDoList = ({todos, onChange, onDelete}) => {

    return (
        <div>
        
            {todos.map(todo => {
                return <TodoItem 
                key={todo.id}
                todo={todo}
                onChange={onChange}
                onDelete={onDelete}
                />
            })}
            
        </div>
    )
}

export default ToDoList;