import React from 'react';

export const TaskForm = () => {
  return (
    <div>
      <form className="form">
        <input
          type="text"
          className="task-input"
          placeholder="Add Task"
          required
        />
        <div className="buttons">
          <button type="submit" className="btn add-task-btn">
            Add Task
          </button>
          <button type="submit" className="btn clear-btn">
            Clear Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
