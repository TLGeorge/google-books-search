import React from 'react';
import Media from 'react-bootstrap/Media';
import { Row } from 'react-bootstrap';
// import API from '../utils/API';
// import { ViewButton, DeleteButton } from '../Buttons'

export default function ResultCard(props) {
    return (
        <Row>
            {props.API.map(book =>
                <Media>
                    <Media.Body>
                        <h5> {book.title} </h5>
                        <h4> {book.authors} </h4>
                        <p>
                            {book.description}
                        </p>
                    </Media.Body>
                    <img
                        width={64}
                        height={64}
                        className="ml-3"
                        src={book.image}
                        alt={book.title}
                        href={book.link}
                    />
                    {/* <ViewButton /> */}
                    {/* <DeleteButton /> */}
                </Media>
            )}
        </Row >

    )
}
