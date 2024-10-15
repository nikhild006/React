import React, { useEffect, useState } from "react";

function User({ onAddUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data.slice(0, 4));
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="row">
      {users.map((user) => (
        <div key={user.id} className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">Email: {user.email}</p>
              <button 
                className="btn btn-primary" 
                onClick={onAddUser}>
                Add User
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default User;
