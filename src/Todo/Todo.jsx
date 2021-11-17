import React, { useState } from "react";
import {v4 as uuid} from "uuid";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);

    const onCreateTask = ({title, description}) => {
        const newTask = {
            title: title,
            status: tasks.length % 2 === 0 ? true : false,
            description: description,
            id: uuid()
        }
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
    }

    const removeTask = (id) => {
        const updatedTasks = tasks.filter( task => task.id!==id );
        setTasks(updatedTasks);    
    }

    const handleTaskToggle = (id) => {
        const updatedTasks = tasks.map( task => {
            if ( task.id === id )task.status = !task.status;
            return task;
        });

        setTasks(updatedTasks);
    }

    return (
        <>
            <h1>TODO</h1>
            <TodoInput handleCreateTask={onCreateTask} />
            <TodoList data={tasks.filter(item=>!item.status)} handleRemoveTask={removeTask} handleTaskToggle={handleTaskToggle} />
            <button onClick={() => setShowCompleted(!showCompleted)}>Show Completed</button>
            {showCompleted && <TodoList data={tasks.filter(item=>item.status)} handleRemoveTask={removeTask} handleTaskToggle={handleTaskToggle} />}
        </>
    )
}

export default Todo;