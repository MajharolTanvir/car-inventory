import React from 'react';
import { Carousel } from '3d-react-carousal';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import useProduct from '../../Hooks/useProduct';

const Home = () => {
    let slides = [
        <img src="https://picsum.photos/800/300/?random" alt="1" />,
        <img src="https://picsum.photos/800/301/?random" alt="2" />,
        <img src="https://picsum.photos/800/302/?random" alt="3" />,
        <img src="https://picsum.photos/800/303/?random" alt="4" />,
        <img src="https://picsum.photos/800/304/?random" alt="5" />];

    const [products] = useProduct()
    return (
        <div>
            <div>
                <Carousel slides={slides} autoplay={true} interval={1000} />
            </div>
            <div className='my-5'>
                <h3 className='my-5'>Inventory</h3>
                <div className='grid grid-cols-3'>
                    {
                        products.slice(0, 6).map(product => <div key={product._id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product?.picture} />
                                <Card.Body>
                                    <Card.Title>{product?.name}</Card.Title>
                                    <Card.Text>
                                        {product?.about ? product.about.slice(0, 120) : product.about}
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
            </div>
        </div>
    );
};

export default Home;