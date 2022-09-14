/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { FaMinus,FaPlus } from 'react-icons/fa';
import { ImBin } from 'react-icons/im';


const CartProduct = ({product,upserting,deleting}) => {
    const [quantity,setQuantity] = useState(product?.quantity);
    

    useEffect(()=> {
        upserting({...product,quantity});
    },[quantity])

    return (
        <div key={product._id} className={`h-32 border-2 flex justify-between gap-x-8 p-3 rounded-md`}>

            <img src={product.image} alt="" className="h-full max-w-[10rem] w-full rounded-md border-2 object-cover select-none" />

            <section className="grow shrink flex flex-wrap justify-between items-center">
                <h3 className='basis-full select-none'>{product.name}</h3>
                <p className='text-lg font-bold select-none'><span className='text-clr'>৳</span> {product.price * quantity}</p>
                <div className='inline-flex gap-5 items-center'>
                    <ImBin className='w-6 h-6 text-red-600 cursor-pointer' onClick={()=>deleting(product._id)}/>
                    <section className='inline-flex items-center rounded-full bg-white px-2 overflow-hidden border-2 border-dark'>
                    <FaMinus onClick={()=> setQuantity(prev=>prev-1)} className='w-3 h-3 text-dark cursor-pointer'/>
                    <span className='text-lg font-bold px-2 text-clr select-none'>{quantity}</span>
                    <FaPlus onClick={()=> setQuantity(prev=>prev+1)} className='w-3 h-3 text-dark cursor-pointer'/>
                    </section>

                </div>
            </section>

        </div>
    );
};

export default CartProduct;