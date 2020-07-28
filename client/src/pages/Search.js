import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// import ResultCard from '../ResultCard/resultcard';
import API from '../utils/API'


export default function SearchBar() {
    //  Setting our component's initial state
    const [books, setBooks] = useState([])
    const [search, setSearchForm] = useState('')

    // Handles updating component state when the user types into the input (search) field
    async function handleInputChange(event) {
        const { value } = event.target;
        await setSearchForm(value)
        console.log('SEARCH -->', search)
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    async function handleFormSubmit(event) {
        event.preventDefault();
        console.log('you clicked the submit button')
        try {
            if (search) {
                const results = await API.googleBooksSearch(search)

                await setBooks(results.items)
                await setSearchForm('')
                console.log('books ---> ', books)
                console.log('search ', search)
            }
        } catch (error) {
            console.log(error)
        }
        console.log('BOOKS(after api call) -->', books)
    };
    function saveBook(book) {
        console.log(book)
        API.insertBook(book)
    }

    return (
        <div>
            <Container>
                <Jumbotron>
                    <h1>Search For a Book</h1>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Which book would you like to read? </Form.Label>
                            <Form.Control value={search.value}
                                name=''
                                onChange={handleInputChange}
                                type="textarea"
                                placeholder="Enter book title " />
                            <Form.Text className="text-muted">
                                "I do believe something very magical can happen when you read a good book." - J.K. Rowling
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Search
                        </Button>
                    </Form>
                </Jumbotron>
            </Container>

            {/* <Container>
                {bookResults.length(
                    <Row>
                        {bookResults.map(book => {
                            return (
                                <ResultCard
                                    key={book.id ? book.id : ""}
                                    title={}
                                    authors={}
                                    image={}
                                    link={} >
                                    <SaveBtn onClick={() => saveBook({
                                        title: book.volumeInfo.title,
                                        authors: book.volumeInfo.authors,
                                        googleId: book.id,
                                        image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "",
                                        description: book.volumeInfo.description,
                                        link: book.volumeInfo.infoLink
                                    })} />
                                </ResultCard>
                            )
                        })}
                    </Row>
                )}
            </Container> */}
        </div>

    );
}
