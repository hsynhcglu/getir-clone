import React from 'react'
import { HiOutlinePlus } from 'react-icons/hi'

export default function Favoritesui({favorites: {id,title,image,alt,price}}) {
    return (
        <a href="#" className='flex flex-col items-center p-8 relative'>
            <img src={image} />
            <span className='font-semibold text-primary-color dark:text-secondary-color'>₺{price}</span>
            <h1 className='font-semibold text-sm dark:text-gray-200'>{title}</h1>
            <h2 className='text-sm text-gray-500 dark:text-gray-900'>{alt}</h2>
            <HiOutlinePlus className='dark:bg-primary-color dark:text-white absolute right-6 top-6 border rounded-md text-primary-color hover:bg-primary-color hover:text-white transition-all' size={22} />
        </a>
    )
}
 