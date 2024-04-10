import React, { useState, useEffect } from "react";
import { Container, Table } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_LEADERBOARD } from "../utils/queries.js"; 

const LeaderboardPage = () => {
    const { loading, error, data: userData } = useQuery(QUERY_LEADERBOARD);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { userScores } = userData;

    userScores.sort((a, b) => b.score - a.score);

    return (
        <Container>
            <h1>Leaderboard</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {userScores.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.username}</td>
                            <td>{user.score}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default LeaderboardPage;
