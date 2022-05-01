import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const Product = () => {
    const params = useParams()
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState({})

    useEffect(() => {
        fetch(`https://car-inventory-bd.herokuapp.com/inventory/${params.id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [params.id])
    const handleDeleteStock = () => {
        let stocks;
        stocks = JSON.parse(product.quantity) + 1;
        setQuantity(stocks)
    }
    console.log(quantity);
    return (
        <div className='mx-auto my-10 container'>
            <Row xs={1} md={1} className='max-w-3xl mx-auto'>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={product?.picture} />
                        <Card.Body>
                            <Card.Title><span className='font-bold'>Name:</span> {product?.name}</Card.Title>
                            <Card.Text><span className='font-bold'>Description:</span> {product.about}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem><span className='font-bold'>Price:</span> {product?.balance}</ListGroupItem>
                            <ListGroupItem><span className='font-bold'>Supplier:</span> {product?.Supplier}</ListGroupItem>
                            <ListGroupItem><span className='font-bold'>Quantity:</span> {product?.quantity}</ListGroupItem>
                        </ListGroup>
                        <button onClick={handleDeleteStock} className='bg-indigo-300 py-2 rounded-lg'>Delivered</button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Product;