import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';

const EndPage = () => {
    const [canPlay, setCanPlay] = useState(true);

    useEffect(() => {
        const lastPlayTimestamp = localStorage.getItem('lastPlayTimestamp');
        const currentTime = new Date().getTime();
        const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

        if (lastPlayTimestamp && currentTime - lastPlayTimestamp < twentyFourHours) {
            setCanPlay(false); // If less than 24 hours have passed, disable play button
        }
    }, []);

    const handlePlayAgain = () => {
        // Set last play timestamp to current time
        localStorage.setItem('lastPlayTimestamp', new Date().getTime());
        history.push('/gameplay'); // Redirect to gameplay page
    }

    return (
        <Container>
            <div>
                <p>
                    Your Final Score Was {}
                </p>
                

                
                

                
                
            </div>
            <button onClick={handlePlayAgain} disabled={!canPlay}>Play Again</button>
        </Container>
    );
}

export default EndPage;