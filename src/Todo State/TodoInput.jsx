import React from "react";
import style from "./Todo.module.css";

const ToDoInput = ({handleCreateTask}) => {
    const [state, setState] = React.useState({
        title: "",
    });
    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleNewTask = (e) => {
        e.preventDefault();
        handleCreateTask(state);
    }

    return (
        <form onSubmit={handleNewTask} className={style.form}>
            <div className={style.input}>
                <input type="text" value={state.title} name="title" onChange={handleInput} placeholder="Type to Add Tasks" />    
                <input type="submit" value="+" />
            </div>
        </form>
    )
}

export default ToDoInput