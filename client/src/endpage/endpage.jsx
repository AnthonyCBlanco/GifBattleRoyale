import React, { useEffect, useState } from 'react';

import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainNavbar from '../components/navbar';

const EndPage = () => {
    const [canPlay, setCanPlay] = useState(true);

    useEffect(() => {
        // Check if the user can play again based on the timestamp stored in localStorage
        const lastPlayTimestamp = localStorage.getItem('lastPlayTimestamp');
        const currentTime = new Date().getTime();
        const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

        if (lastPlayTimestamp && currentTime - lastPlayTimestamp < twentyFourHours) {
            setCanPlay(false); // If less than 24 hours have passed, disable the play button
        }
    }, []);

    const handlePlayAgain = () => {
        // Redirect to gameplay page and set the timestamp
        // localStorage.setItem('lastPlayTimestamp', new Date().getTime());
        window.location.href = '/play';
    }

    return (
        <div className="endpage">
            <MainNavbar />
            <Container className="text-center mt-5">
                <h1 className="mb-4">Thank You for Playing!</h1>
                <h2 className="score-text mb-5">
                    Check out the leaderboard to see how others did!
                </h2>
                {canPlay ? (
                    <button onClick={handlePlayAgain} className="btn btn-primary">Play Again</button>
                ) : (
                    <div>
                        <h3>Please come back tomorrow to play again!</h3>
                        <img src="https://media1.tenor.com/m/t2oF_ayMhg0AAAAd/try-again-tomorrow-mr-miyagi.gif" className="rounded mx-auto d-block" alt="Come Back Tomorrow" />
                    </div>
                )}
            </Container>
        </div>
    );
}

export default EndPage;
