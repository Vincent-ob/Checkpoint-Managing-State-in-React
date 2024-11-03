import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName && taskDescription) {
            const newTask = { 
                id: Date.now(), 
                name: taskName, 
                description: taskDescription 
            };
            addTask(newTask);
            setTaskName('');
            setTaskDescription('');
        } else {
            alert('Please fill in both fields');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={taskName} 
                onChange={(e) => setTaskName(e.target.value)} 
                placeholder="Task Name" 
                required 
            />
            <input 
                type="text" 
                value={taskDescription} 
                onChange={(e) => setTaskDescription(e.target.value)} 
                placeholder="Task Description" 
                required 
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;