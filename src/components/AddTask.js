import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
const AddTask = ({ taskList, setTaskList }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState(""); //description
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const input = document.getElementById("add-task-title");

    if (input === document.activeElement) {
      // document.getElementById("add-task-text").rows = "3";
      document.getElementById("add-task-container").classList.add("p-5");
      document.getElementById("add-task-container").classList.add("p-5");
      document.getElementById("add-task-text").classList.remove("hidden");
      document.getElementById("add-btn-container").classList.remove("hidden");
    } else {
      document.getElementById("add-task-container").classList.remove("p-5");
      document.getElementById("add-task-container").classList.add("p-2");
      document.getElementById("add-task-text").classList.add("hidden");
      document.getElementById("add-btn-container").classList.add("hidden");
    }
  }, [isFocused]);

  useEffect(() => {
    setIsFocused(false);
  }, [taskList]);

  const handleCancel = () => {
    setIsFocused(false);
    setTitle("");
    setDesc("");
  };

  const handleAddTask = () => {
    if (title.length > 0) {
      let newTask = {
        id: nanoid(),
        desc: desc,
        taskTitle: title,
        isDone: false,
      };
      let newTaskList = [...taskList, newTask];
      setTaskList(newTaskList);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div id="add-task-container" className="mt-3 bg-white p-1 rounded-lg p-5">
      <div className="flex items-center flex-col justify-center">
        <input
          id="add-task-title"
          type="text"
          onFocus={() => setIsFocused(true)}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder={
            isFocused ? "Task name here..." : "Click to add a new task!"
          }
          className="text-bold text-sm md:text-md border-b bg-transparent p-1 w-72 sm:w-96 pl-2 h-10 focus:outline-none"
          autoComplete="off"
        />

        <textarea
          id="add-task-text"
          type="text"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          rows="3"
          placeholder="Description (optional)"
          className="hidden text-sm bg-transparent p-1 py-2 w-72 sm:w-96 pl-2 focus:outline-none resize-none"
        />
      </div>
      <div
        id="add-btn-container"
        className="hidden flex items-center justify-end gap-3 mr-2"
      >
        <button
          onClick={handleCancel}
          className="flex items-center justify-center text-sm md:text-md border-2 border-gray-200 text-slate-500 py-1 px-3 w-18 h-8 rounded-lg hover:bg-slate-100"
        >
          Cancel
        </button>
        <button
          onClick={handleAddTask}
          className="flex items-center justify-center text-sm md:text-md gradient-primary text-white py-1 px-3 w-28 h-8 rounded-lg"
        >
          Add a task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
