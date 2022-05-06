import React from 'react';
import { useForm } from "react-hook-form";

const AddNewItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/inventorys`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='container mx- auto'>
            <form className='w-3/6 flex flex-col mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Product name' className='border-2 border-sky-500 my-2 py-1 px-2 rounded-md' type="text" {...register("name")} />
                <textarea placeholder='Description' className='border-2 border-sky-500 my-2 py-1 px-2 rounded-md' type="text" {...register("about")} />
                <input placeholder='Price' className='border-2 border-sky-500 my-2 py-1 px-2 rounded-md' type="number" {...register("balance")} />
                <input placeholder='Supplier name' className='border-2 border-sky-500 my-2 py-1 px-2 rounded-md' type="text" {...register("Supplier")} />
                <input placeholder='Quantity' className='border-2 border-sky-500 my-2 py-1 px-2 rounded-md' type="number" {...register("quantity")} />
                <input placeholder='Image url' className='border-2 border-sky-500 my-2 py-1 px-2 rounded-md' type="text" {...register("picture")} />
                <input className='border-2 border-sky-500 my-2 py-1 px-2 rounded-md' type="submit" value="Add your product" />
            </form>
        </div>
    );
};

export default AddNewItems;