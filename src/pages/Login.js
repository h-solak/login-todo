import { useState } from "react";
import {
  MdLockOutline,
  MdMailOutline,
  MdRemoveRedEye,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import userList from "../data/account.json";
import toast from "react-hot-toast";
const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSecret, setIsSecret] = useState(true); //to make the password visible or not visible

  const handleUsernameChange = (e) => {
    let newUsername = e.target.value;
    setUsername(newUsername);
  };

  const handlePasswordChange = (e) => {
    let newPassword = e.target.value;
    setPassword(newPassword);
  };

  const checkLogin = (account) => {
    if (username === account.username) {
      if (password === account.password) {
        setIsLoggedIn(true);
        toast(`Welcome, ${account.name}!`, {
          icon: "👏",
        });
      } else {
        toast.error("Wrong password!");
      }
    }
  };

  const handleLogin = (e) => {
    if (username.length === 0 || password.length === 0) {
      if (username.length === 0 && password.length !== 0) {
        toast.error("Enter a username!");
      } else if (password.length === 0 && username.length !== 0) {
        toast.error("Enter a password!");
      } else {
        toast.error("Enter your username and password!");
      }
    } else {
      //if user entered valid inputs, check login info
      userList.accounts.forEach((account) => checkLogin(account));
    }
    e.preventDefault();
  };

  return (
    <form className="card flex items-center flex-col justify-center gap-5 bg-white p-8 rounded-lg w-84 h-64">
      <span
        className="w-full text-left text-2xl border-l-2 border-gray-300 pl-2 my-3"
        style={{ color: "#8e44ad" }}
      >
        Hey, there!
      </span>
      <div className="flex items-center border-b pb-1">
        <MdMailOutline className="text-lg md:text-xl text-slate-500" />
        <input
          type="text"
          placeholder="Username"
          onChange={handleUsernameChange}
          value={username}
          className="bg-transparent focus:outline-none text-sm md:text-md px-2"
        />
      </div>
      <div className="flex items-center border-b pb-1">
        <MdLockOutline className="text-lg md:text-xl text-slate-500" />
        <div className="relative flex items-center">
          <input
            type={isSecret ? "password" : "text"}
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
            className="bg-transparent focus:outline-none text-sm md:text-md px-2"
          />
          {password.length > 0 ? (
            isSecret ? (
              <MdRemoveRedEye
                className="text-lg md:text-xl text-slate-500 pointer"
                onClick={() => setIsSecret(!isSecret)}
                style={{ position: "absolute", right: "0px" }}
              />
            ) : (
              <MdOutlineRemoveRedEye
                className="text-lg md:text-xl text-slate-500 pointer"
                onClick={() => setIsSecret(!isSecret)}
                style={{ position: "absolute", right: "0px" }}
              />
            )
          ) : null}
        </div>
      </div>
      <button
        onClick={handleLogin}
        className="text-sm md:text-md gradient-primary text-stone-50 py-1 px-8 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
