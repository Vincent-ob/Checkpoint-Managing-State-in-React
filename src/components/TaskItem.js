import React, { useState } from 'react';

const TaskItem = ({ task, editTask, deleteTask, toggleCompletion }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedName, setUpdatedName] = useState(task.name);
    const [updatedDescription, setUpdatedDescription] = useState(task.description);

    const handleEdit = () => {
        if (updatedName && updatedDescription) {
            editTask(task.id, { ...task, name: updatedName, description: updatedDescription });
            setIsEditing(false);
        } else {
            alert('Please fill in both fields');
        }
    };

    return (
        <li className={task.completed ? 'completed' : ''}>
            {isEditing ? (
                <div>
                    <input 
                        type="text" 
                        value={updatedName} 
                        onChange={(e) => setUpdatedName(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        value={updatedDescription} 
                        onChange={(e) => setUpdatedDescription(e.target.value)} 
                    />
                    <button onClick={handleEdit}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <span onClick={() => toggleCompletion(task.id)}>{task.name}</span>
                    <span>{task.description}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => {
                        if (window.confirm('Are you sure you want to delete this task?')) {
                            deleteTask(task.id);
                        }
                    }}>Delete</button>
                </div>
            )}
        </li>
    );
};

export default TaskItem;