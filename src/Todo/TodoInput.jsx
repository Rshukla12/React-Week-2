import React from "react";

const ToDoInput = ({handleCreateTask}) => {
    const [state, setState] = React.useState({
        title: "",
        description: ""
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
        <form onSubmit={handleNewTask}>
            <div>
                <input type="text" value={state.title} name="title" onChange={handleInput} placeholder="Type to Add Tasks" />
            </div>
            <div>
                <input type="text" value={state.description} name="description" onChange={handleInput} placeholder="Type to Add Description" />
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default ToDoInput