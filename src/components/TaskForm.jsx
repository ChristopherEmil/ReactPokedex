import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskForm() {
  const [title, settitle] = useState("");
  const [descrption, setDescrption] = useState("");

  const {createTask} = useContext(TaskContext)

  const handleSumit = (e) => {
    e.preventDefault();
    createTask(title, descrption);
    settitle("");
    setDescrption("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSumit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crear tarea</h1>
      <input className="bg-slate-300 p-3 w-full mb-2"
        type="text"
        placeholder="Ecribe tu tarea"
        onChange={(e) => {
          settitle(e.target.value);
        }}
        value={title}
        autoFocus
      />
      <textarea className="bg-slate-300 p-3 w-full mb-2"
        type="text"
        placeholder="Ecribe tu tarea"
        onChange={(e) => {
          setDescrption(e.target.value);
        }}
        value={descrption}
      ></textarea>
      <button className="bg-indigo-500 text-white px-3 py-1">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
