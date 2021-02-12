import React, { useContext, useState } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
  const { addTask, clearList } = useContext(TaskListContext);

  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title);
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          onChange={handleChange}
          value={title}
          type="text"
          className="task-input"
          placeholder="Add Task"
          required
        />
        <div className="buttons">
          <button type="submit" className="btn add-task-btn">
            Add Task
          </button>
          <button
            onClick={clearList}
            type="submit"
            className="btn clear-btn"
          >
            Clear Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
