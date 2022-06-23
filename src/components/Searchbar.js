import { useState, useEffect } from "react";
import { MdOutlineSearch, MdOutlineClose } from "react-icons/md";
const Searchbar = ({ taskList, setFilteredTaskList }) => {
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    let newFilteredTaskList = taskList.filter((task) =>
      task.taskTitle.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredTaskList(newFilteredTaskList);
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div
      className="searchbar flex items-center justify-between px-1 bg-white rounded pointer"
      onClick={() => document.getElementById("searchbar").focus()}
      style={{ borderRadius: "12px" }}
    >
      <div className="flex items-center">
        <MdOutlineSearch className="text-xl text-black" />
        <input
          id="searchbar"
          type="text"
          value={searchText}
          onChange={handleChange}
          placeholder="Search..."
          className="p-1 focus:outline-none"
        />
      </div>
      {searchText.length > 0 ? (
        <MdOutlineClose
          onClick={() => setSearchText("")}
          className="text-xl text-black pointer"
        />
      ) : null}
    </div>
  );
};

export default Searchbar;
