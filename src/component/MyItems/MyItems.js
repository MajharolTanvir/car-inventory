import { toast } from 'react-toastify';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import useItems from '../../Hooks/useItems';
import { useNavigate } from 'react-router-dom';

const MyItems = () => {
    const { items, setItems } = useItems()
    const navigate = useNavigate()
    const handleUpdate = id => {
        navigate('/')
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://car-inventory-bd.herokuapp.com/myItems/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast('Items Delete successfully', data)
                    const remaining = items.filter(item => item._id !== id)
                    setItems(remaining)
                })
        }
    }
    return (
        <div className='h-screen'>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-auto container'>
                {
                    items.map(item => <div key={item._id} className='my-3'>
                        <Card className='shadow-xl shadow-gray-600 mx-auto mt-10 h-full' style={{ width: '18rem', }}>
                            <Card.Img variant="top" src={item?.picture} />
                            <Card.Body>
                                <Card.Title>{item?.name}</Card.Title>
                                <Card.Text>
                                    {item?.about ? item.about.slice(0, 60) : item.about}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{item?.balance}</ListGroupItem>
                                <ListGroupItem>{item?.Supplier}</ListGroupItem>
                                <ListGroupItem>{item?.quantity}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link to="/"><button className='px-2 py-1 rounded-lg border-2 hover:bg-sky-600 hover:text-white  border-sky-600' onClick={() => handleDelete(item._id)}>Delete item</button></Card.Link>
                                <Card.Link to="/"><button onClick={() => handleUpdate(item._id)}>Stock update</button></Card.Link>
                            </Card.Body>
                        </Card>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;