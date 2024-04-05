import React from "react";
import './gameplay.css';
import { Row, Col, Container, Button } from 'react-bootstrap'
function GamePage() {
    return (
        <Container>
            <Row>
                <Col xs={6}>
                    <p className="Prompt">You just got in a car accident. What is your reaction?</p>
                </Col>
            </Row>
            <Row>
                <Col > <Button variant="dark"><img src="https://media1.tenor.com/m/b8gWCDKua2oAAAAd/side-eye.gif"/></Button></Col>
                <Col > <Button variant="dark"><img src="https://media1.tenor.com/m/47qpxBq_Tw0AAAAd/cat-cat-meme.gif"/></Button></Col>
                <Col > <Button variant="dark"><img src="https://media1.tenor.com/m/5BYK-WS0__gAAAAd/cool-fun.gif"/></Button></Col>
                <Col > <Button variant="dark"><img src="https://media1.tenor.com/m/Z0_epChCzkMAAAAC/cat-standing.gif"/></Button></Col>
            </Row>
            <br/>
            <Row>
                <Col><Button variant="dark">Next</Button></Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default GamePage