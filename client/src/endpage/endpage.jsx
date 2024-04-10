import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        localStorage.setItem('lastPlayTimestamp', new Date().getTime());
        window.location.href = '/play';
    }

    return (
        <div className="endpage">
            <Navbar className="navbar-custom">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-link-custom">
                        <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>
                        <Nav.Link as={Link} to="/gameplay" onClick={handlePlayAgain}>Play Again</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container className="text-center mt-5">
                <h1 className="mb-4">Thank You for Playing!</h1>
                <h2 className="score-text mb-5">
                    You have completed the game and have earned a score of {localStorage.getItem('score')}
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
