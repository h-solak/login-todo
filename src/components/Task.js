import {
  MdRadioButtonUnchecked,
  MdCheckCircle,
  MdDelete,
} from "react-icons/md";
import { TbPencil } from "react-icons/tb";

const Task = ({ id, taskTitle, desc, isDone, checkTask, deleteTask }) => {
  return (
    <div
      className="flex justify-center flex-col px-1 gap-1 w-72 sm:w-96 pt-3 p-1 border-b border-gray-300"
      style={isDone ? { background: "#c6ffde" } : { background: "#fcfcfc" }}
    >
      <div className="flex items-center justify-between">
        <div
          className="flex items-center gap-3 pointer"
          onClick={() => checkTask(id)}
        >
          {isDone ? (
            <MdCheckCircle className="text-lg checkbox-color" />
          ) : (
            <MdRadioButtonUnchecked className="text-lg" />
          )}
          <div className="flex flex-col text-left">
            <span className="text-md text-black text-left font-semibold">
              {taskTitle}
            </span>
          </div>
        </div>
        <MdDelete
          onClick={() => deleteTask(id)}
          className="text-xl text-slate-700 pointer hover:text-red-500 active:text-red-700"
        />
      </div>

      {desc.length > 0 ? (
        <div className="flex items-center gap-4">
          <TbPencil className="opacity-0" />
          <span className="text-sm text-semibold text-gray-400 text-left">
            {desc}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default Task;
