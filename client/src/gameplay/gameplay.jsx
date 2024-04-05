import React, { useState } from "react";
import { Row, Col, Container, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { QUERY_PROMPT } from "../utils/queries.js";
import { useQuery } from "@apollo/client";
import { Chart } from "react-google-charts";

const GamePage = () => {
    const { loading, error, data: promptData } = useQuery(QUERY_PROMPT);
    const [promptIndex, setPromptIndex] = useState(0);
    const [show, setShow] = useState(false);

    const handleNextClick = () => {
        setPromptIndex(prevIndex => prevIndex + 1);
        setShow(true);
    }

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

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
                        <Button variant="dark">
                            <img src={gif.endpoint} alt={`GIF ${index + 1}`} />
                        </Button>
                    </Col>
                ))}
            </Row>
            <br />

            <Button variant="primary" onClick={handleNextClick}>Next</Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Do not even try to press escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>

            <Chart
                chartType="PieChart"
                data={[["Task", "Hours per Day"], ["Work", 11], ["Eat", 2], ["Commute", 2], ["Watch TV", 2], ["Sleep", 7]]}
                options={{ title: "My Daily Activities" }}
                width={"100%"}
                height={"400px"}
            />
        </Container>
    );
}

export default GamePage;
