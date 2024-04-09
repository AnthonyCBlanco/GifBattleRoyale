import { useState } from "react";
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Modal }from 'react-bootstrap';
import { QUERY_PROMPT } from "../utils/queries.js";
import { useQuery, useMutation } from "@apollo/client";
import { Chart } from "react-google-charts";
import './gameplay.css';
import { ADD_VOTE } from "../utils/mutations.js";

const GamePage = () => {
    const { loading, error, data: promptData } = useQuery(QUERY_PROMPT);
    const [promptIndex, setPromptIndex] = useState(0);
    const [selectedGif, setSelectedGif] = useState(null)
    const [addVote] = useMutation(ADD_VOTE)
 
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { prompt } = promptData;

    const handleNextClick = () => {
        if(!selectedGif) return 
           
        setPromptIndex(prevIndex => prevIndex + 1);
       
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
        if(!selectedGif) return

        addVote({
            variables: {
                promptText: prompt[promptIndex].text,
                gifIndex: selectedGif - 1
            }
        }).then(res => console.log(res))
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
                        <Button variant="dark" onClick={() => handleGifClick(index + 1)}>
                            <img src={gif.endpoint} alt={`GIF ${index + 1}`} className="gifBox"/>
                            <p>{gif.caption}</p>
                        </Button>
                    </Col>
                ))}
            </Row>
            <br />

            <Button variant="primary" onClick={handleSubmitClick}>Submit</Button>
            <Button variant="secondary" onClick={handleNextClick}>Next</Button>

        </Container>
    );
}

export default GamePage;