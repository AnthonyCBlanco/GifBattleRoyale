import React from 'react';
import './homepage.css';

function HomePage() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <ul className="navList">
          <li className="navItem">Home</li>
          <li className="navItem">About</li>
          <li className="navItem">Play Game</li>
          <li className="navItem">Leaderboard</li>
        </ul>
      </nav>

      <section className="heroSection">
        <h1>Welcome to GIF Battle!</h1>
        <p>The ultimate challenge of choosing the most popular GIFs. Ready to test your intuition?</p>
        <button className="playNowBtn">Play Now</button>
      </section>

      <section className="gameDescription">
        <h2>What is GIF Battle?</h2>
        <p>GIF Battle is a game where you select the most popular GIFs based on different fun and engaging scenarios. Whether you're guessing which GIF best fits a hilarious moment or which reaction GIF will be the crowd favorite, GIF Battle offers endless entertainment and competition.</p>
      </section>

      <section className="howToPlay">
        <h2>How to Play</h2>
        <ol>
          <li>Choose a scenario from the Play Game page.</li>
          <li>Select the GIF that you think is the most popular choice.</li>
          <li>Submit your choice and see if you guessed correctly!</li>
          <li>Compete with others on the leaderboard by playing more and earning points.</li>
        </ol>
      </section>
    </div>
  );
  }

export default HomePage;
