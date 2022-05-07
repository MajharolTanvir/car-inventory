import { useEffect, useState } from 'react';

const useProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = 'https://car-inventory-bd.herokuapp.com/inventorys';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts];
};

export default useProduct;