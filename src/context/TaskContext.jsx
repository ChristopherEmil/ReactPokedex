import { createContext } from "react";
import { tasks as data } from "../tasks";
import React, { useState, useEffect } from "react";

export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(titleTask, descriptionTak) {
    setTasks([
      ...tasks,
      {
        title: titleTask,
        id: tasks.length + 1,
        description: descriptionTak,
      },
    ]);
  }
  function deleteTask(taskId) {
    //console.log(tasks.filter(n=> n.id !== id))
    //console.log(taskId)
    setTasks(tasks.filter((n) => n.id !== taskId));
  }
  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
