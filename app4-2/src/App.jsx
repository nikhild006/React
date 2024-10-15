import React, { useState } from "react";
import "./App.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import User from "../components/User";
import UserCounter from "../components/UserCounter";

function App() {
  const [userCount, setUserCount] = useState(0);

  const incrementUserCount = () => {
    setUserCount(userCount + 1);
  };

  return (
    <div className="container my-4">
      <h1 className="text-center">User Management App</h1>
      <UserCounter count={userCount} />
      <User onAddUser={incrementUserCount} />
    </div>
  );
}

export default App;
