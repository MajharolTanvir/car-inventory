import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
// import useProduct from '../../Hooks/useProduct.js'

const MyItems = () => {
    const [user] = useAuthState(auth)
    // const [product] = useProduct()
    console.log(user.email);

    useEffect(() => {
        fetch(`https://car-inventory-bd.herokuapp.com/myProducts?email=${user?.email}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [user?.email])
    return (
        <div>
            
        </div>
    );
};

export default MyItems;