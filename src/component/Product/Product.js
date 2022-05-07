import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    // const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        fetch(`https://car-inventory-bd.herokuapp.com/inventory/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);
    console.log(product);


    const handleDeleteStock = (event) => {
        event.preventDefault()
        const recentQuantity = parseInt(product.quantity);
        const updateQuantity = recentQuantity - 1;
        const updateStock = { updateQuantity }


        //  put Delivered 
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
                console.log(data);
                const quantity = updateStock.updateQuantity;
                const newQuantity = { ...product, quantity }
                setProduct(newQuantity)
                console.log(newQuantity);
            })
            .catch((error) => {
                // console.error('Error:', error);
            });

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const recentQuantity = parseInt(product.quantity);
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
                console.log(data);
                // if (data.modifiedCount > 0) {
                const quantity = updateStock.updateQuantity;
                const newQuantity = { ...product, quantity }
                setProduct(newQuantity)
                console.log(newQuantity);
                event.target.reset()
                // }
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
                            <Card.Img variant="top" src={product?.picture} />
                            <Card.Body>
                                <Card.Title><span className='font-bold'>Name:</span> {product?.name}</Card.Title>
                                <Card.Text><span className='font-bold'>Description:</span> {product.about}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><span className='font-bold'>Price:</span> {product?.balance}</ListGroupItem>
                                <ListGroupItem><span className='font-bold'>Supplier:</span> {product?.Supplier}</ListGroupItem>
                                <ListGroupItem><span className='font-bold'>Quantity:</span> {product.quantity}</ListGroupItem>
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
        </div>
    );
};

export default Product;