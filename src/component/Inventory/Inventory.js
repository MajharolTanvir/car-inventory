import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import useProduct from '../../Hooks/useProduct';

const Inventory = () => {
    const [products] = useProduct()
    return (
        <div className='grid grid-cols-3 mx-auto container'>
            {
                products.map(product => <div key={product._id} className='my-3'>
                    <Card style={{ width: '18rem', }}>
                        <Card.Img variant="top" src={product?.picture} />
                        <Card.Body>
                            <Card.Title>{product?.name}</Card.Title>
                            <Card.Text>
                                {product?.about ? product.about.slice(0, 80) : product.about}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{product?.balance}</ListGroupItem>
                            <ListGroupItem>{product?.Supplier}</ListGroupItem>
                            <ListGroupItem>{product?.quantity}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </div>)
            }
        </div>
    );
};

export default Inventory;