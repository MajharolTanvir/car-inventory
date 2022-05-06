import React from 'react';
import { Carousel } from '3d-react-carousal';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import useProduct from '../../Hooks/useProduct';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let slides = [
        <img src="https://cdn.wallpapersafari.com/55/16/twCLD9.jpg" alt="1" />,
        <img src="https://cdn.wallpapersafari.com/74/78/5t03FZ.jpg" alt="2" />,
        <img src="https://wallpaperaccess.com/full/33115.jpg" alt="3" />,
        <img src="https://wallpapercave.com/wp/CoodbqM.jpg" alt="4" />,
        <img src="https://cdn.wallpapersafari.com/55/16/twCLD9.jpg" alt="5" />];

    const [products] = useProduct()
    const navigate = useNavigate()
    const handleUpdate = id => {
        navigate(`/inventory/${id}`)
    }


    return (
        <div className='container'>
            <div>
                <Carousel slides={slides} autoplay={true} interval={3000} />
            </div>
            <div className='my-5'>
                <h3 className='my-5 text-center'>Inventory</h3>
                <div className='grid grid-cols-3'>
                    {
                        products.slice(0, 6).map(product => <div key={product._id} className='my-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product?.picture} />
                                <Card.Body>
                                    <Card.Title>{product?.name}</Card.Title>
                                    <Card.Text>
                                        {product?.about ? product.about.slice(0, 100) : product.about}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>{product?.balance}</ListGroupItem>
                                    <ListGroupItem>{product?.Supplier}</ListGroupItem>
                                    <ListGroupItem>{product?.quantity}</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link to="/"><button onClick={() => handleUpdate(product._id)}>Stock update</button></Card.Link>
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