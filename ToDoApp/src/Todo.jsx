import { useState } from "react";

function Todo(){
    const[tasks, setTasks] = useState(["Wake up", "Freshen Up", "Eat breakfast"])
    const[newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);

    }

    function addTask(){
        if (newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

    }

    function deleteTask(index){
        const updatedList = tasks.filter((_, idx) => idx != index);
        setTasks(updatedList);
    }
    
    function moveTaskUp(index){
        if (index > 0){
            const swapedTask = [...tasks];
            [swapedTask[index], swapedTask[index - 1]] = [swapedTask[index - 1], swapedTask[index]];
            setTasks(swapedTask);
        }  
    }
    function moveTaskDown(index){
        if (index < tasks.length - 1){
            const swapedTask = [...tasks];
            [swapedTask[index], swapedTask[index + 1]] = [swapedTask[index + 1], swapedTask[index]];
            setTasks(swapedTask);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                <input 
                    type="text"
                    placeholder="Enter a new Task"
                    value={newTask}
                    onChange={handleInputChange}/>
                <button 
                    className="add-button"
                    onClick={addTask}>
                        Add Task
                </button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text"> {task} </span>
                    <button 
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                    Delete
                    </button>
                    <button 
                        className="move-button"
                        onClick={() => moveTaskUp(index)}>
                    ⬆️
                    </button>
                    <button 
                        className="move-button"
                        onClick={() => moveTaskDown(index)}>
                    ⬇️
                    </button>
                    </li>
                    )}
            </ol>
        </div>

    )

}


export default Todo;
