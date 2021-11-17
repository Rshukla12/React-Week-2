import React from "react";

const TodoItem = ({ item, handleRemoveTask, handleTaskToggle }) => {
    return (
        <li>
            <div>
                {item.title} - {item.status?"Completed": "Pending"}- {item.description} 
                <button style={{height: '2rem', marginTop: '1.5rem', marginLeft: '1rem'}} onClick={() => handleRemoveTask(item.id)}>Remove</button>
                <button style={{height: '2rem', marginTop: '1.5rem', marginLeft: '1rem'}} onClick={() => handleTaskToggle(item.id)}>Toggle Status</button>
            </div>
        </li>
    )
}

export default TodoItem;