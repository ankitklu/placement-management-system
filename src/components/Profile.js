import React, { useState } from "react";
import axios from "axios";

export default function Profile() {
  const [result, setResult] = useState(null);

  if (result == null) {
    axios.get("http://localhost:8081/show").then((response) => {
      console.log(JSON.stringify(response.data));
      setResult(response.data);
    });
    return <div>there is no data to display</div>;
  } else {
    return (
      <div>
        The user data is given below <br />
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
          {result.map((user) => {
            return (
              <tr>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>{user.role}</th>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
