import { useState, useContext } from 'react';
import { TaskContext } from './../../context/TaskContext';

const TaskForm = () => {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-700 p-10 mb-4 flex flex-col gap-2 items-center">
        <h1 className="mb-2 text-3xl text-white font-bold">Crear tu tarea</h1>
        <input
          className="bg-gray-800 p-3 rounded-md w-full mb-2 text-white"
          type="text"
          placeholder="Enter a Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          className="bg-gray-800 p-3 rounded-md w-full text-white"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description"
          value={description}></textarea>
        <button className=" bg-indigo-600 px-4 py-2 rounded-md  text-white self-end hover:bg-indigo-500">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
