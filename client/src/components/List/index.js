import React from "react";
import Media from 'react-bootstrap/Media';
import { Row, Container } from 'react-bootstrap';
import "./style.css";

// This file exports both the List and ListItem components

// export function List({ children }) {
//     return (
//         <div className="list-overflow-container">
//             <ul className="list-group">{children}</ul>
//         </div>
//     );
// }

// export function ListItem({ children }) {
//     return <li className="list-group-item">{children}</li>;
// }

export default function List({ children }) {
    return (
        <Container className="list-overflow-container">
            <Row className="list-group">{children}</Row>
        </Container>
    );
}

export default function ListItem({ children }) {
    return <Media className="list-group-item">{children}</Media>;
}

