import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = (e) => {
        e.preventDefault();
        if (!taskName || !taskDescription) return;

        const newTask = {
            id: Date.now(),
            name: taskName,
            description: taskDescription,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setTaskName("");
        setTaskDescription("");
    };

    const handleDeleteTask = (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this task?");
        if (confirmed) {
            setTasks(tasks.filter((task) => task.id !== id));
        }
    };

    const handleToggleComplete = (id) => {
        setTasks(tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="app-container">
            <form className="task-form" onSubmit={handleAddTask}>
                <input
                    type="text"
                    placeholder="Task Name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <textarea
                    placeholder="Task Description"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>

            <ul className="task-list">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={`task-item ${task.completed ? "completed" : ""}`}
                    >
                        <span className="task-name">{task.name}</span>
                        <p>{task.description}</p>
                        <div className="task-buttons">
                            <button
                                className="edit-btn"
                                onClick={() => handleToggleComplete(task.id)}
                            >
                                {task.completed ? "Undo" : "Complete"}
                            </button>
                            <button
                                className="delete-btn"
                                onClick={() => handleDeleteTask(task.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;