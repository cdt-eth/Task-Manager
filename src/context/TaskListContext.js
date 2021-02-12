import React, { createContext, useState } from 'react';

import uuid from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: 'Read the book', id: 1 },
    { title: 'Wash the car', id: 2 },
    { title: 'Write some code', id: 3 },
  ]);

  const addTask = (title) => {
    setTasks([...tasks, { title: title, id: uuid }]);
  };

  return (
    <TaskListContext.Provider value={{ tasks, addTask }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
