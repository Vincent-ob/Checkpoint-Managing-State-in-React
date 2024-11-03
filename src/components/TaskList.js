import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, editTask, deleteTask, toggleCompletion }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    editTask={editTask} 
                    deleteTask={deleteTask} 
                    toggleCompletion={toggleCompletion} 
                />
            ))}
        </ul>
    );
};

export default TaskList;