import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from React Router

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
        // Redirect to gameplay page
        window.location.href = '/gameplay';
    }

    const handleLinkClick = () => {
        // Call handlePlayAgain when clicking on the homepage or leaderboard link
        handlePlayAgain();
    }

    return (

        <div >
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
            <Container className="container">
                <div>
                    <h1>Thank you for playing!</h1>
                    <h3>
                    <p>You have completed the game and have earned a score of {localStorage.getItem('score')} </p>
                    </h3>
                    
                    <img src="https://media1.tenor.com/m/NDTNsJVfGHQAAAAC/big-teeth-flying-kiss-ramzan-shahrukh.gif" class="rounded float-center" alt="Ant Dog" />
                    <img src="https://media1.tenor.com/m/WjjzGvWCKi8AAAAC/thank-you.gif" class="rounded float-center" alt="Thank You GIF 1" />
                    <img src="https://media1.tenor.com/m/nd95arNXpYMAAAAd/mow-fat-cat.gif" class="rounded float-start" alt="cat GIF" />
                    <img src="https://media1.tenor.com/m/NVP2kRD7CHsAAAAC/dancing-dog.gif" class="rounded float-start" alt="Dancing Dog GIF" />
                    <img src="https://media1.tenor.com/m/ZjKW-yz5RRMAAAAC/friday-come.gif" class="rounded float-start" alt="Friday GIF" />
                    <img src="https://media1.tenor.com/m/_TV6qVC4toAAAAAd/panda-dancing.gif" class="rounded float-start" alt="Panda Dancing GIF" />
                    <img src="https://media1.tenor.com/m/odIc01pq20sAAAAC/happy-dance.gif.gif" class="rounded float-start" alt="dance" />
                    <img src="https://media1.tenor.com/m/V_-Ki_G7TAsAAAAC/baby.gif" class="rounded float-start" alt="baby GIF" />
                    <img src="https://media.tenor.com/zoGazakVgPAAAAAM/dance.gif" class="rounded float-start" alt="Thank You GIF 2" />
                    <img src="https://media1.tenor.com/m/VBEJZ-mG10cAAAAd/dune-feyd-rautha.gif" class="rounded float-start" alt="Dune 2 GIF" />
                    <img src="https://media.tenor.com/J_1rvj9mL4kAAAAM/tiktok-dog-awkward-dog.gif" class="rounded float-start" alt="dog GIF" />
                    <img src="https://media1.tenor.com/m/IpXwtZtCGj4AAAAd/otter-dancing.gif" class="rounded float-start" alt="Otter Dancing GIF" />
                   
                </div>
            </Container>
        </div>

    );
}

export default EndPage;




