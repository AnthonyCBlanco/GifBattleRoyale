import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "./leaderboard.css";

const LeaderBoardPage = ({ users, isAuthenticated }) => {
  // Define state to hold user data
  const [leaderboardUsers, setLeaderboardUsers] = useState(users);

  // Function to add a new user to the leaderboard
  const addUserToLeaderboard = (userData) => {
    if (isAuthenticated) {
      setLeaderboardUsers((prevUsers) => [...prevUsers, userData]);
    } else {
      alert("You must be signed in to submit your score.");
    }
  };

  return (
    <div className="leaderBoardPage">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>

          {leaderboardUsers &&
            leaderboardUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LeaderBoardPage;
