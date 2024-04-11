import React, { useEffect, useState } from 'react';
import MainNavbar from '../components/navbar';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Added useHistory for navigation
import './endpage.css';

const EndPage = () => {
    const [canPlay, setCanPlay] = useState(true);
    const history = useHistory(); // Using useHistory for navigation

    useEffect(() => {
        const lastPlayTimestamp = localStorage.getItem('lastPlayTimestamp');
        const currentTime = new Date().getTime();
        const twentyFourHours = 24 * 60 * 60 * 1000;

        if (lastPlayTimestamp && currentTime - lastPlayTimestamp < twentyFourHours) {
            setCanPlay(false);
        }
    }, []);

    const handlePlayAgain = () => {
        localStorage.setItem('lastPlayTimestamp', new Date().getTime());
        history.push('/play'); 
    }

    return (
        <div className="endpage">
            <MainNavbar />
            <Container className="text-center mt-5">
                <h1 className="mb-4">Thank You for Playing!</h1>
                <p className="score-text mb-5">
                    Check out the <Link to="/leaderboard">leaderboard</Link> to see how others did!
                </p>
                {canPlay ? (
                    <button onClick={handlePlayAgain} className="btn btn-primary">Play Again</button>
                ) : (
                    <div>
                        <h2>Please come back tomorrow to play again!</h2>
                        <img src="https://media1.tenor.com/m/t2oF_ayMhg0AAAAd/try-again-tomorrow-mr-miyagi.gif" alt="Come Back Tomorrow" className="rounded mx-auto d-block" />
                    </div>
                )}
            </Container>
        </div>
    );
};

export default EndPage;
