import React, { useState } from "react";
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Modal }from 'react-bootstrap';
import { QUERY_PROMPT } from "../utils/queries.js";
import { useQuery, useMutation } from "@apollo/client";
import { Chart } from "react-google-charts";
import './gameplay.css';

const GamePage = () => {
    const { loading, error, data: promptData } = useQuery(QUERY_PROMPT);
    const [promptIndex, setPromptIndex] = useState(0);
    const [showPromptModal, setShowPromptModal] = useState(false);
    const [showChartModal, setShowChartModal] = useState(false);
    const [selectedGif, setSelectedGif] = useState(null)

    

    const handleNextClick = () => {
        if(!selectedGif) return 
           
        setPromptIndex(prevIndex => prevIndex + 1);
        setShowPromptModal(true);


    }

    const handleGifClick = (gifIndex) => {
        console.log("gif clicked:", gifIndex)
        setSelectedGif(gifIndex)
        
    }

    const handleClosePromptModal = () => setShowPromptModal(false);
    const handleCloseChartModal = () => setShowChartModal(false);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { prompt } = promptData;

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

            <Button variant="primary" onClick={handleNextClick}>Next</Button>

            <Modal show={showPromptModal} onHide={handleClosePromptModal} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>GIF BATTLE ROYALE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Click the Show Chart button to see what competitors chose!!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePromptModal}>Close</Button>
                    <Button variant="primary" onClick={() => setShowChartModal(true)}>Show Chart</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showChartModal} onHide={handleCloseChartModal}>
                <Modal.Header closeButton>
                    <Modal.Title>GIF BATTLE ROYALE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Chart
                        chartType="PieChart"
                        data={
                            [["Task", "Hours per Day"], ["Gif1", prompt[promptIndex].gifs[0].votes], ["Gif2", prompt[promptIndex].gifs[1].votes], ["Gif3", prompt[promptIndex].gifs[2].votes], ["Gif4", prompt[promptIndex].gifs[3].votes]]}
                        options={{ title: "Competitors Scores" }}
                        width={"100%"}
                        height={"400px"}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseChartModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default GamePage;