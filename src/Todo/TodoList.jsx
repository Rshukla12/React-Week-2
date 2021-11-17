import TodoItem from "./TodoItem"

const TodoList = ({data, handleRemoveTask, handleTaskToggle}) => {
    return (
        <ul>
            { data.map(item => (
                <TodoItem key={item.id} item={item} handleRemoveTask={handleRemoveTask} handleTaskToggle={handleTaskToggle} />
            ))}
        </ul>
    )
}

export default TodoList;