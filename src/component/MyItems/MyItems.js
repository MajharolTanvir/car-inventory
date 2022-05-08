import { toast } from 'react-toastify';
import useItems from '../../Hooks/useItems';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const MyItems = () => {
    const { items, setItems } = useItems()
    const navigate = useNavigate()
    const handleUpdate = id => {
        navigate(`/myItems/${id}`)
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
            <div className='mx-auto container'>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-x-auto">
                                <table class="min-w-full">
                                    <thead class="border-b">
                                        <tr>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Name:
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Price
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Supplier
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                quantity
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Update
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>
                                    {
                                        items.map(item =>
                                            <tbody>
                                                <tr class="border-b">
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {item.name}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {item.balance}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {item.Supplier}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {item.quantity}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <Card.Link to="/"><button className='px-2 py-1 rounded-lg border-2 hover:bg-sky-600 hover:text-white  border-sky-600' onClick={() => handleUpdate(item._id)}>Stock update</button></Card.Link>
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <Card.Link to="/"><button className='px-2 py-1 rounded-lg border-2 hover:bg-sky-600 hover:text-white  border-sky-600' onClick={() => handleDelete(item._id)}>Delete item</button></Card.Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyItems;