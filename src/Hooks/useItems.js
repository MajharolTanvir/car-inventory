import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';

const useItems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])
    useEffect(() => {
        const email = user?.email;
        fetch(`https://car-inventory-bd.herokuapp.com/myitems?email=${email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [user])
    return {items, setItems}
};

export default useItems;