import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
/* Data */
import userList from "./data/account.json";
/* Pages */
import Login from "./pages/Login";
import Home from "./pages/Home";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (isLoggedIn) {
      console.log("Logged in successfully!");
    } else {
      console.log("You may sign in with the accounts below");
      console.log(userList.accounts);
    }
  }, [isLoggedIn]);
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Toaster />
      {/* Router kullanmaya gerek duymadım sadece iki sayfa olacağı için */}
      {isLoggedIn ? (
        <Home setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
