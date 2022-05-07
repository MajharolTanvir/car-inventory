import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';

const AddNewItems = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://car-inventory-bd.herokuapp.com/inventorys`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId);
                toast('Your item added')
                navigate('/inventory')
            })

        fetch(`https://car-inventory-bd.herokuapp.com/myItems`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId);
                navigate('/inventory')
            })
    };

    return (
        <div className='container mx-auto h-full py-16'>
            <div className='md:w-3/6 mx-auto p-8 rounded-lg shadow-xl shadow-black border-4 border-sky-600'>
                <form className='flex flex-col mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Product name' className='border-2 border-sky-500 my-2 py-1 px-2 rounded-md' type="text" {...register("name")} />
                    <input placeholder='Email' value={user?.email} className='border-2 border-sky-500 my-2 py-1 px-2 rounded-md' type="email" {...register("email")} readOnly />
                    <textarea placeholder='Description' className='border-2 border-sky-500 my-2 py-1 px-2 rounded-md' type="text" {...register("about")} />
                    <input placeholder='$Price' className='border-2 border-sky-500 my-2 py-1 px-2 rounded-md' type="number" {...register("balance")} />
                    <input placeholder='Supplier name' className='border-2 border-sky-500 my-2 py-1 px-2 rounded-md' type="text" {...register("Supplier")} />
                    <input placeholder='Quantity' className='border-2 border-sky-500 my-2 py-1 px-2 rounded-md' type="number" {...register("quantity")} />
                    <input placeholder='Image url' className='border-2 border-sky-500 my-2 py-1 px-2 rounded-md' type="text" {...register("picture")} />
                    <input className='px-2 py-1 mt-3 rounded-lg border-2 hover:bg-gray-600 hover:text-white  border-gray-600' type="submit" value="Add your product" />
                </form>
            </div>
        </div>
    );
};

export default AddNewItems;