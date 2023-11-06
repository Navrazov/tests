import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Users = () => {
  const [users, setUsers] = useState([]);

  const laodUsers = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");

    setUsers(resp.data);
  };

  useEffect(() => {
    laodUsers();
  }, []);
  return (
    <div data-testid='users-page'>
      {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id} data-testid="user-item">
          {user.name}
        </Link>
      ))}
    </div>
  );
};

export default Users;
