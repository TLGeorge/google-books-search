import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import { Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { List, ListItem, ResultCard } from '../components/List';
import { SaveButton, ViewButton } from '../components/Buttons/'
import API from '../utils/API'


export default function SearchBar() {
    //  Setting our component's initial state
    const [books, setBooks] = useState([])
    const [search, setSearchForm] = useState('')

    // Handles updating component state when the user types into the input (search) field
    async function handleInputChange(event) {
        const { value } = event.target;
        await setSearchForm(value)
        console.log('input change -->', search)
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    async function handleFormSubmit(event) {
        event.preventDefault();
        console.log('you clicked the submit button')
        try {
            if (search) {
                const results = await API.googleBooksSearch(search)

                console.log('search ', search)
                console.log(results)
                await setBooks(results.items)
                await setSearchForm('')
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


            <Container>
                {books.length ? (
                    <div>
                        {books.map(book => {
                            return (
                                <ResultCard
                                    key={book.id ? book.id : ""}
                                    title={book.volumeInfo.title ? book.volumeInfo.title : ""}
                                    authors={book.volumeInfo.authors ? book.volumeInfo.authors : ""}
                                    description={book.volumeInfo.description ? book.volumeInfo.description : ""}
                                    src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""}
                                    image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""}
                                    alt={book.volumeInfo.title ? book.volumeInfo.title : ""}
                                    href={book.volumeInfo.infoLink ? book.volumeInfo.infoLink : ""}
                                >
                                    <ViewButton href={book.volumeInfo.infoLink ? book.volumeInfo.infoLink : ""} />
                                    <SaveButton onClick={() => saveBook({
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
                    </div>
                ) : (
                        <></>
                    )}
            </Container>
        </div>

    );
}