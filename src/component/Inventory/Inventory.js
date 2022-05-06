import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProduct from '../../Hooks/useProduct';

const Inventory = () => {
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
        <div className='grid grid-cols-3 mx-auto container'>
            {
                products.map(product => <div key={product._id} className='my-3'>
                    <Card style={{ width: '18rem', }}>
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
                            <ListGroupItem>{product?.quantity}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link to="/"><button onClick={() => handleUpdate(product._id)}>Stock update</button></Card.Link>
                            <Card.Link to="/"><button onClick={() => handleDelete(product._id)}>detete product</button></Card.Link>
                        </Card.Body>
                    </Card>
                </div>)
            }
        </div>
    );
};

export default Inventory;