import React from 'react';
import Media from 'react-bootstrap/Media';
import { Row } from 'react-bootstrap';

export default function ResultCard() {
    return (
        <Row>
            <Media>
                <Media.Body>
                    {/* <h5> {props.title} </h5>
                    <h4> {props.author} </h4>
                    <p>
                        {props.description}
                    </p> */}
                </Media.Body>
                {/* <img
                    width={64}
                    height={64}
                    className="ml-3"
                    src={props.image}
                    alt={props.title}
                    href="link"
                /> */}
            </Media>

        </Row >

    )
}
