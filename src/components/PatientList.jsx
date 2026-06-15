import { useEffect, useState } from "react";
import axios from "axios";

function PatientList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-info text-white">
        API Patient List
      </div>

      <div className="card-body">
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              <strong>{user.name}</strong>
              <br />
              {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PatientList;