import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';

const Product = () => {
    const params = useParams()
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        fetch(`https://car-inventory-bd.herokuapp.com/inventory/${params.id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [params.id])
    console.log(product.quantity);


    const handleDeleteStock = () => {
        let stocks;
        stocks = product.quantity - 1;
        setQuantity(stocks)
        console.log(stocks);
    }

    const handleSubmit = event => {
        event.preventDefault()
        const number = event.target.number.value;
        console.log(number);

        // put method
        axios.put(`https://car-inventory-bd.herokuapp.com/inventory/${params.id}`, {

        })
            .then(response => response.json())
            .then(number => {
                setQuantity('Success:', number);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        console.log(number);

    }

    return (
        <div className='text-center'>
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
                                <ListGroupItem><span className='font-bold'>Quantity:</span> {quantity}</ListGroupItem>
                            </ListGroup>
                            <button onClick={handleDeleteStock} className='bg-indigo-300 py-2 rounded-lg'>Delivered</button>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='text-center mb-5'>
                <h3>Update your product quantity</h3>
                <form onSubmit={handleSubmit}>
                    <input type="Text" name="number" className='py-1 rounded-md border-2 border-sky-500' />
                    <input className='py-1 px-3 border-2 border-sky-500 ml-2 rounded-md' type="submit" value="Submit" />
                </form>
            </div>
            <Link to="/inventory"><button className='font-bold text-xl border-2 border-sky-500 px-4 py-1 rounded-md mt-2 mb-5'>Manage inventory</button></Link>
            <Link to="/addNewItem"><button className=' ml-3 font-bold text-xl border-2 border-sky-500 px-4 py-1 rounded-md mt-2 mb-5'>Add new Item</button></Link>
        </div>
    );
};

export default Product;