import Task from './task';
import { useContext } from 'react';
import { TaskContext } from './../../context/TaskContext';

export const TaskList = () => {
  const { tasks, deleteTask } = useContext(TaskContext);

  if (tasks.length === 0)
    return (
      <h1 className="text-4xl text-center font-bold text-red-500 uppercase hover:scale-105 cursor-pointer">
        No hay tareas!!
      </h1>
    );

  return (
    <div className=" grid grid-cols-4 gap-2">
      {tasks.map((task) => {
        return <Task task={task} key={task.id} deleteTask={deleteTask} />;
      })}
    </div>
  );
};
