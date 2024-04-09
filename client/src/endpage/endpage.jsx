import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

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
                <h1>Thank you for playing!</h1>
                <h3>You can only play once a day. Come back tomorrow! </h3>
                <img src="https://media1.tenor.com/m/NDTNsJVfGHQAAAAC/big-teeth-flying-kiss-ramzan-shahrukh.gif" alt="Ant Dog" />
                <img src="https://media1.tenor.com/m/WjjzGvWCKi8AAAAC/thank-you.gif" alt="Thank You GIF 1" />
                <img src="https://media1.tenor.com/m/V_-Ki_G7TAsAAAAC/baby.gif" alt="baby GIF" />
                <img src="https://media1.tenor.com/m/nd95arNXpYMAAAAd/mow-fat-cat.gif" alt="cat GIF" />
                <img src="https://media1.tenor.com/m/IpXwtZtCGj4AAAAd/otter-dancing.gif" alt="Otter Dancing GIF" />
                <img src="https://media1.tenor.com/m/NVP2kRD7CHsAAAAC/dancing-dog.gif" alt="Dancing Dog GIF" />
                <img src="https://media1.tenor.com/m/_TV6qVC4toAAAAAd/panda-dancing.gif" alt="Panda Dancing GIF" />
                <img src="https://media1.tenor.com/m/ZjKW-yz5RRMAAAAC/friday-come.gif" alt="Friday GIF" />
                <img src="https://media.tenor.com/zoGazakVgPAAAAAM/dance.gif" alt="Thank You GIF 2" />
                <img src="https://media1.tenor.com/m/VBEJZ-mG10cAAAAd/dune-feyd-rautha.gif" alt="Dune 2 GIF" />
                <img src="https://media.tenor.com/J_1rvj9mL4kAAAAM/tiktok-dog-awkward-dog.gif" alt="dog GIF" />
                <img src="https://media1.tenor.com/m/odIc01pq20sAAAAC/happy-dance.gif.gif" alt="dance" />

                
                

                
                
            </div>
            <button onClick={handlePlayAgain} disabled={!canPlay}>Play Again</button>
        </Container>
    );
}

export default EndPage;