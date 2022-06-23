import React from "react";
import Task from "./Task";
import toast from "react-hot-toast";
const TaskList = ({ taskList, setTaskList, filteredTaskList }) => {
  const checkTask = (id) => {
    let selectedTask = taskList.filter((task) => task.id === id);
    /*
      I've created the piece of code below to make sorting better.
      Now the tasks that are done will be listed at the bottom while undone tasks
      are at the top
    */
    selectedTask[0].isDone = !selectedTask[0].isDone;
    let withoutSelected = taskList.filter((task) => task.id !== id);
    if (selectedTask[0].isDone) {
      toast.success("Task is done!");
      let newTaskList = withoutSelected.concat(selectedTask);
      setTaskList(newTaskList);
    } else {
      let withoutSelected = taskList.filter((task) => task.id !== id);
      let newTaskList = selectedTask.concat(withoutSelected);
      setTaskList(newTaskList);
    }
  };
  const deleteTask = (id) => {
    let newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  };
  return (
    <>
      {filteredTaskList.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          taskTitle={task.taskTitle}
          desc={task.desc}
          isDone={task.isDone}
          checkTask={checkTask}
          deleteTask={deleteTask}
        />
      ))}
    </>
  );
};

export default TaskList;
