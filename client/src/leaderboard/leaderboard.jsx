import React, { useState } from "react";
import "./leaderboard.css"; 
import { QUERY_LEADERBOARD } from "../utils/queries"
import { useQuery } from "@apollo/client";
import MainNavbar from "../components/navbar";

const LeaderBoardPage = () => {
 
  const { loading, error, data: leaderboardData } = useQuery(QUERY_LEADERBOARD)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const  leaderboardUsers  = leaderboardData.leaderboard

  console.log(leaderboardUsers)


  return (
    <>
    <MainNavbar />
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
                <span className="leaderboard-score">{user.highscore}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LeaderBoardPage;
