import React from "react";

function UserCounter({ count }) {
  return (
    <div className="text-center my-3">
      <h2>Total Users Added: {count}</h2>
    </div>
  );
}

export default UserCounter;
