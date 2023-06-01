import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function ExpandablePanel({ header, children }) {
    return (
        <>
            <Accordion className='m-2'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{header}</Accordion.Header>
                    <Accordion.Body>
                        {children}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}
