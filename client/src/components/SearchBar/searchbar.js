import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';

export default function SearchBar() {
    return (
        <Container>
            <Jumbotron>
                <h1>Book Search</h1>
                <p>
                    Which book would you like to read?
      </p>
                <p>
                    <Button variant="primary">Search</Button>
                </p>
            </Jumbotron>
        </Container>

    )
}
