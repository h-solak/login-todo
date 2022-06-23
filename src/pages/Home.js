import { useState, useEffect } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import Searchbar from "../components/Searchbar";
import { MdLogout } from "react-icons/md";

const Home = ({ setIsLoggedIn }) => {
  const [taskList, setTaskList] = useState([]);
  const [filteredTaskList, setFilteredTaskList] = useState([]);
  useEffect(() => {
    //When the page is loaded, get local storage data if there are any
    const savedTodos = JSON.parse(localStorage.getItem("todo-case-data"));
    if (savedTodos) {
      setTaskList(savedTodos);
    }
  }, []);

  useEffect(() => {
    //if user deletes or checks an item, the filter will be resetted because of the line below
    setFilteredTaskList(taskList);

    /* Saving changes to the local storage */
    localStorage.setItem("todo-case-data", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="mb-16">
      <span className="font-semibold text-gray-600">HOME PAGE</span>
      <Searchbar
        taskList={taskList}
        setFilteredTaskList={setFilteredTaskList}
      />
      <div className="flex items-center flex-col">
        <AddTask taskList={taskList} setTaskList={setTaskList} />

        {filteredTaskList.length > 0 ? (
          <div className="tasks-container flex items-center flex-col mt-3">
            <TaskList
              taskList={taskList}
              setTaskList={setTaskList}
              filteredTaskList={filteredTaskList}
            />
          </div>
        ) : null}
      </div>

      <button
        onClick={() => setIsLoggedIn(false)}
        className="text-xl logout-btn gradient-primary text-white p-1 mt-16 rounded"
      >
        <MdLogout />
      </button>
    </div>
  );
};

export default Home;
