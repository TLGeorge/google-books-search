import React from "react";
import Media from 'react-bootstrap/Media';
import { Row, Container } from 'react-bootstrap';
import { DeleteButton, ViewButton, SaveButton } from '../Buttons'


// This file exports both the List and ListItem components

export default function List({ children }) {
    return (
        <Container className="list-overflow-container">
            <Row className="list-group">{children}</Row>
        </Container>
    );
}

export function ListItem({ children }) {
    return <Media className="list-group-item">{children}</Media>;
}

export function ResultCard(props) {
    return (
        <div>
            <Media>
                <Media.Body>
                    <h5> {props.title} </h5>
                    <h4> {props.authors} </h4>
                    <p>
                        {props.description}
                    </p>
                </Media.Body>
                <img
                    width={64}
                    height={64}
                    className="ml-3"
                    src={props.image}
                    alt={props.title}
                    href={props.link}
                />
                <ViewButton />
                <SaveButton />

            </Media>
        </div>

    )
}