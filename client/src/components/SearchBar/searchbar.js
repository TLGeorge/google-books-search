import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function SearchBar() {
    return (
        <Container>
            <Jumbotron>
                <h1>Search For a Book</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Which book would you like to read? </Form.Label>
                        <Form.Control type="textarea" placeholder="Enter book title" />
                        <Form.Text className="text-muted">
                            "I do believe something very magical can happen when you read a good book." - J.K. Rowling
    </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
  </Button>
                </Form>

            </Jumbotron>
        </Container>

    )
}
