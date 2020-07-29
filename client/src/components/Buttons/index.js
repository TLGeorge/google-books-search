import React from 'react';
import Button from 'react-bootstrap/Button';

export function ViewButton(props) {
    return (
        <Button variant="outline-primary" {...props}>View</Button>
    )
}

export function SaveButton(props) {
    return (
        <Button variant="outline-success" {...props}>Save</Button>
    )
}

export function DeleteButton(props) {
    return (
        <Button variant="outline-danger" {...props}>Delete</Button>
    )
}
