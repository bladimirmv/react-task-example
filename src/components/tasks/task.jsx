import { useContext } from 'react';
import { TaskContext } from './../../context/TaskContext';

const Task = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl uppercase font-bold">{task.title}</h1>
      <p className="text-gray-400 text-sm">{task.description}</p>
      <button
        className="bg-red-500 p-2 rounded-md mt-2 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}>
        Elminar Tarea
      </button>
    </div>
  );
};

export default Task;
