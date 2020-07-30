import React, { useState, useEffect } from 'react';
import SavedBar from '../components/Saved/savedbar';
import API from '../utils/API';
import { List, ListItem, ResultCard } from '../components/List'
import { Container, Row } from 'react-bootstrap';
import { ViewButton, DeleteButton } from '../components/Buttons';

export default function Saved() {
    //  Setting our component's initial state
    const [savedBooks, setSaved] = useState([])

    // Load books and save them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setSaved(res.data)
            )
            .catch(err => console.log(err));
    };
    // Deletes the book with the given id
    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }
    return (
        <div>
            <SavedBar />

            <Container>
                {savedBooks.length ? (
                    <Row>
                        {savedBooks.map(book => {
                            return (
                                <ResultCard
                                    key={book.id}
                                    title={book.title}
                                    authors={book.authors}
                                    description={book.description}
                                    src={book.imageLinks}
                                    image={book.imageLinks}
                                    alt={book.title}

                                >
                                    <ViewButton href={book.infoLink} />
                                    <DeleteButton />
                                </ResultCard>
                            )
                        })}
                    </Row>
                ) : (
                        <></>
                    )}
            </Container>
        </div>
    );

}
