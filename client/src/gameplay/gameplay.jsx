import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from 'react-bootstrap';
import { QUERY_PROMPT } from "../utils/queries.js";
import { ADD_VOTE, ADD_SCORE } from "../utils/mutations.js";
import { useQuery, useMutation } from "@apollo/client";
import './gameplay.css';
import auth from "../utils/auth.js";

const GamePage = () => {
    const { loading, error, data: promptData } = useQuery(QUERY_PROMPT);

    const [promptIndex, setPromptIndex] = useState(0);
    const [selectedGif, setSelectedGif] = useState(null)
    const [isSubmitted, SubmitAnswer] = useState(false)
    const [userScore, setUserScore] = useState(0);
    
    const [addVote] = useMutation(ADD_VOTE)
    const [addScore] = useMutation(ADD_SCORE)

    useEffect(() => {
        SubmitAnswer(false);
    }, [promptIndex]);
 
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { prompt } = promptData;
    const  user  = auth.getProfile().data

    console.log(user)
    

    const handleNextClick = () => {
        if(!isSubmitted) return 
        
        setPromptIndex(prevIndex => prevIndex + 1);

        if(promptIndex === 8){
            console.log("Game Over")

            addScore({
                variables: {
                    username: user.username,
                    highscore: userScore
                }
            }).then(() => {
                window.location.href = '/endpage';
            });
        }
       
        addVote({
            variables: {
                promptText: prompt[promptIndex].text,
                gifIndex: selectedGif - 1
            }
        }).then(res => console.log(res))
    }

    const handleGifClick = (gifIndex) => {
        console.log("gif clicked:", gifIndex)
        setSelectedGif(gifIndex)
        
    }

    const handleSubmitClick = () =>{
        if(!selectedGif || isSubmitted) return
        console.log("vote submitted")

        addVote({
            variables: {
                promptText: prompt[promptIndex].text,
                gifIndex: selectedGif - 1
            }
        }).then(() => {
            const selectedGifVotes = prompt[promptIndex].gifs[selectedGif - 1].votes;
            const maxVotes = Math.max(...prompt[promptIndex].gifs.map(gif => gif.votes));
            if (selectedGifVotes === maxVotes) {
                setUserScore(prevScore => prevScore + 1);
            }
        });

        SubmitAnswer(true)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="Title"> User must pick Gif that matches best with Prompt!! </h1>
                </Col>
            </Row>

            <Row>
                <Col xs={6}>
                    <p className="Prompt">{prompt[promptIndex].text}</p>
                </Col>
            </Row>
            
            <Row>
                {prompt[promptIndex].gifs.map((gif, index) => (
                    <Col key={index}>
                        <Button variant="dark" onClick={() => handleGifClick(index + 1)} className={index+1 === selectedGif ? "gifSelected gifButton": "gifButton"}>
                            <img src={gif.endpoint} alt={`GIF ${index + 1}`} className="gifBox"/>
                            <p>{gif.caption}</p>    
                        </Button>     
                        {isSubmitted && (
                                <p>{gif.votes/0.25}% </p>
                            )}
                    </Col>
                ))}
            </Row>
            <br />
            <Button variant="primary" onClick={handleSubmitClick}>Submit</Button>
            <Button variant="secondary" onClick={handleNextClick}>Next</Button>
            <p>User's Score: {userScore}</p>
        </Container>
    );
}

export default GamePage;