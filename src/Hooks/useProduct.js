import { useEffect, useState } from 'react';

const useProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://car-inventory-bd.herokuapp.com/inventorys')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts];
};

export default useProduct;