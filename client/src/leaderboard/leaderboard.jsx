// import React from 'react';
// import { Container, Table } from 'react-bootstrap';
// import { useQuery } from '@apollo/client';
// import { QUERY_LEADERBOARD } from '../utils/queries';

// const LeaderboardPage = () => {
//   const { loading, data, error } = useQuery(QUERY_LEADERBOARD);

//   if (loading) return <Container className="leaderBoardPage"><p>Loading...</p></Container>;
//   if (error) return <Container className="leaderBoardPage"><p>Error: {error.message}</p></Container>;

//   const { userScores } = data.leaderboard; 

//   userScores.sort((a, b) => b.score - a.score);

//   return (
//     <Container className="leaderBoardPage">
//       <h1>Leaderboard</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Username</th>
//             <th>Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {userScores.map((user, index) => (
//             <tr key={user.username}> Ensuring key is a unique value
//               <td>{index + 1}</td>
//               <td>{user.username}</td>
//               <td>{user.score}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default LeaderboardPage;

import React, { useState } from "react";
import "./leaderboard.css"; 

const LeaderBoardPage = ({ users, isAuthenticated }) => {
  // Initialize leaderboardUsers with users or an empty array if users is undefined
  const [leaderboardUsers, setLeaderboardUsers] = useState(users || []);


  return (
    <div className="leaderboard-page">
      <div className="leaderboard-container">
        <h1 className="leaderboard-title">Leaderboard</h1>
        <div className="leaderboard">
          <div className="leaderboard-header">
            <span className="leaderboard-rank">#</span>
            <span className="leaderboard-username">Username</span>
            <span className="leaderboard-score">Score</span>
          </div>
          <div className="leaderboard-body">
            {leaderboardUsers.map((user, index) => (
              <div className="leaderboard-row" key={user.id}>
                <span className="leaderboard-rank">{index + 1}</span>
                <span className="leaderboard-username">{user.username}</span>
                <span className="leaderboard-score">{user.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardPage;
