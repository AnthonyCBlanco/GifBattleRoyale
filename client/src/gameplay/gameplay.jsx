import React, { useState } from "react";
import './gameplay.css';
import { Row, Col, Container, Button } from 'react-bootstrap'
import { QUERY_PROMPT } from "../utils/queries.js";
import { useQuery } from "@apollo/client"
import { Chart } from "react-google-charts";

const GamePage = () => {
    const { loading, error, data: promptData } = useQuery(QUERY_PROMPT);
    const [promptIndex, setPromptIndex] = useState(0);

    const handleNextClick = () => {
        // Logic to handle next prompt
        setPromptIndex(prevIndex => prevIndex + 1);
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { prompt } = promptData // Get the current prompt
    console.log(prompt)

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="Title"> User must pick Gif that matches best with Prompt!! </h1>
                </Col>
            </Row>

            <Row>
                <Col xs={6}>
                    <p className="Prompt">{prompt[promptIndex].text}</p> {/* Render the current prompt */}
                </Col>
            </Row>
            
            {/* Render buttons with GIFs */}
            <Row>
                <Col> <Button variant="dark"><img src={prompt[promptIndex].gifs[0].endpoint} alt="GIF 1" /></Button></Col>
                <Col> <Button variant="dark"><img src={prompt[promptIndex].gifs[1].endpoint}  alt="GIF 2" /></Button></Col>
                <Col> <Button variant="dark"><img src={prompt[promptIndex].gifs[2].endpoint}  alt="GIF 3" /></Button></Col>
                <Col> <Button variant="dark"><img src={prompt[promptIndex].gifs[3].endpoint}  alt="GIF 4" /></Button></Col>
            </Row>
            <br />

            {/* Render Pie Chart */}
            <Chart
                chartType="PieChart"
                data={[["Task", "Hours per Day"], ["Work", 11], ["Eat", 2], ["Commute", 2], ["Watch TV", 2], ["Sleep", 7]]} // Sample data, replace it with actual data
                options={{ title: "My Daily Activities" }}
                width={"100%"}
                height={"400px"}
            />

            {/* Next Button */}
            <Row>
                <Col><Button variant="dark" onClick={handleNextClick}>Next</Button></Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default GamePage;