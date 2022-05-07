import React from 'react';
import { Carousel } from '3d-react-carousal';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import useProduct from '../../Hooks/useProduct';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
    let slides = [
        <img src="https://cdn.wallpapersafari.com/55/16/twCLD9.jpg" alt="1" />,
        <img src="https://cdn.wallpapersafari.com/74/78/5t03FZ.jpg" alt="2" />,
        <img src="https://wallpaperaccess.com/full/33115.jpg" alt="3" />,
        <img src="https://wallpapercave.com/wp/CoodbqM.jpg" alt="4" />,
        <img src="https://cdn.wallpapersafari.com/55/16/twCLD9.jpg" alt="5" />];

    const [products, setProducts] = useProduct()
    const navigate = useNavigate()
    const handleUpdate = id => {
        navigate(`/inventory/${id}`)
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://car-inventory-bd.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast('Items Delete successfully', data)
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                })
        }
    }

    return (
        <div className='container'>
            <div className='py-20'>
                <Carousel slides={slides} autoplay={true} interval={3000} />
            </div>
            <div className='py-5 text-center'>
                <h3 className='my-5 text-center'>Inventory</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                    {
                        products.slice(0, 6).map(product => <div key={product._id} className='my-3'>
                            <Card className='shadow-xl shadow-gray-600 mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product?.picture} />
                                <Card.Body>
                                    <Card.Title>{product?.name}</Card.Title>
                                    <Card.Text>
                                        {product?.about ? product.about.slice(0, 60) : product.about}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>{product?.balance}</ListGroupItem>
                                    <ListGroupItem>{product?.Supplier}</ListGroupItem>
                                    <ListGroupItem>{product.quantity}</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link><button className='px-2 py-1 rounded-lg border-2 hover:bg-sky-600 hover:text-white  border-sky-600' onClick={() => handleUpdate(product._id)}>Stock update</button></Card.Link>
                                    <Card.Link><button className='px-2 py-1 rounded-lg border-2 hover:bg-sky-600 hover:text-white  border-sky-600' onClick={() => handleDelete(product._id)}>delete product</button></Card.Link>
                                </Card.Body>
                            </Card>
                        </div>)
                    }
                </div>
                <Link to="/inventory"><button className='px-10 py-1 mt-10 rounded-lg border-2 hover:bg-gray-600 text-xl mb-3  text-white  border-gray-600'>Manage inventory</button></Link>
            </div>
        </div>
    );
};

export default Home;