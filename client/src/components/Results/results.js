import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import { Container, Row } from 'react-bootstrap';
import ResultCard from '../ResultCard/ResultCard'

export default function Results() {
    return (
        <Container>
            <Jumbotron>
                <h1>Results</h1>
                <br></br>
                <Container>
                    <Row>
                        <ResultCard />
                    </Row>
                    <Row>
                        <ResultCard />
                    </Row>
                </Container>
            </Jumbotron>
        </Container>

    )
}