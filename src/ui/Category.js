import React from 'react'

export default function Category({category: {id,title,image}}) {
    return (
        <a href='#' className='dark:hover:bg-secondary-color flex flex-col items-center text-center p-4 gap-y-2 transition hover:bg-purple-50 group'>
            <img src={image} alt={title} className='w-12 h-12 rounded border border-gray-200' />
            <span className='dark:text-white whitespace-nowrap text-sm font-semibold group-hover:text-primary-color text-gray-700 tracking-tight'>{title}</span>
        </a>
    )
}
