import React from 'react';
import { Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';

const UpcomingItems = () => {
    return (
        <div className='mb-16'>
            <div>
                <div className='flex justify-center items-center text-center'>
                    <div className='h-10 w-1 bg-gray-700'></div>
                    <div className='h-1 w-14 bg-gray-700'></div>
                    <h3 className='my-5 border-4 border-gray-800 px-4 rounded-xl'>Up coming...</h3>
                    <div className='h-1 w-14 bg-gray-700'></div>
                    <div className='h-10 w-1 bg-gray-700'></div>
                </div>
            </div>
            <div>
                <CardGroup className='gap-4'>
                    <Card>
                        <Card.Img variant="top" src="https://imgd.aeplcdn.com/664x374/n/cw/ec/109123/i4-exterior-left-front-three-quarter.jpeg" />
                        <Card.Body>
                            <Card.Title>BMW i4</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>The BMW i4 is most likely to arrive in the country sometime by the second quarter of 2022.</ListGroupItem>
                            <ListGroupItem>$ 60 - 80 lakh</ListGroupItem>
                        </ListGroup>
                        <Card.Footer>
                            <small className="text-muted">26th May 2022 Expected Launch</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://imgd.aeplcdn.com/664x374/n/cw/ec/47139/meridian-exterior-left-front-three-quarter.png" />
                        <Card.Body>
                            <Card.Title>Jeep Meridian</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>The new Jeep Meridian will be offered in three variants including FWD MT, FWD AT, and,</ListGroupItem>
                            <ListGroupItem>$ 26 - 30 lakh</ListGroupItem>
                        </ListGroup>
                        <Card.Footer>
                            <small className="text-muted">May 2022 (Tentative)Expected Launch</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://imgd.aeplcdn.com/664x374/n/cw/ec/114971/ev6-exterior-left-front-three-quarter.jpeg" />
                        <Card.Body>
                            <Card.Title>Kia EV6</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>The Kia EV6 could be offered in four variants including Light, Air, Water, and Earth.</ListGroupItem>
                            <ListGroupItem>$ 65 - 70 lakh</ListGroupItem>
                        </ListGroup>
                        <Card.Footer>
                            <small className="text-muted">May 2022 (Tentative)Expected Launch</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default UpcomingItems;