import React, { useEffect, useState } from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { id } = useParams()
    const [items, setItems] = useState({})

    useEffect(() => {
        fetch(`https://car-inventory-bd.herokuapp.com/myItems/${id}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [id]);


    const handleDeleteStock = (event) => {
        const recentQuantity = parseInt(items.quantity);
        const updateQuantity = recentQuantity - 1;
        const updateStock = { updateQuantity }


        //  put Delivered 
        const url = `https://car-inventory-bd.herokuapp.com/myItems/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateStock)
        })
            .then(res => res.json())
            .then(data => {
                const quantity = updateStock.updateQuantity;
                const newQuantity = { ...items, quantity }
                setItems(newQuantity)
            })
            .catch((error) => {
                // console.error('Error:', error);
            });

    }

    const handleUpdateStock = (event) => {
        event.preventDefault()
        const recentQuantity = parseInt(items.quantity);
        const latestQuantity = parseInt(event.target.number.value);
        const updateQuantity = recentQuantity + latestQuantity;
        const updateStock = { updateQuantity }

        // put method
        const url = `https://car-inventory-bd.herokuapp.com/inventory/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateStock)
        })
            .then(res => res.json())
            .then(data => {
                const quantity = updateStock.updateQuantity;
                const newQuantity = { ...items, quantity }
                setItems(newQuantity)
                event.target.reset()
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    return (
        <div className='text-center'>
            <div className='mx-auto my-10 container'>
                <Row xs={1} md={1} className='max-w-3xl mx-auto'>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={items?.picture} />
                            <Card.Body>
                                <Card.Title><span className='font-bold'>Name:</span> {items?.name}</Card.Title>
                                <Card.Text><span className='font-bold'>Description:</span> {items.about}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><span className='font-bold'>Price:</span> {items?.balance}</ListGroupItem>
                                <ListGroupItem><span className='font-bold'>Supplier:</span> {items?.Supplier}</ListGroupItem>
                                <ListGroupItem><span className='font-bold'>Quantity:</span> {items.quantity}</ListGroupItem>
                            </ListGroup>
                            <button onClick={handleDeleteStock} className='px-2 py-1 rounded-lg border-2 hover:bg-sky-600 bg-sky-600 hover:text-white  border-sky-600'>Delivered</button>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='text-center mb-5'>
                <h3>Update your items quantity</h3>
                <form onSubmit={handleUpdateStock}>
                    <input type="Text" name="number" className='py-1 rounded-md border-2 border-sky-500' />
                    <input className='px-2 py-1 rounded-lg border-2 hover:bg-sky-600 hover:text-white  border-sky-600 shadow-lg mx-2 shadow-gray-800' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default ItemDetails;