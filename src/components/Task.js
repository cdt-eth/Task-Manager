import React from 'react'


const Task = ({task}) => {
    return(
        <li className="list-item">
            <span> {task.title}</span>
            <div>
                <button className="btn-delete task-btn">
                    <i className="fas fa-trash-all"></i>
                </button>
                <button className="btn-edit task-btn">
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    ) 
}

export default Task