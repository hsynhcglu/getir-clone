import React from 'react'

export default function Title({ children }) {
    return (
        <div>
            <h3 className='text-sm font-semibold mb-3 dark:text-white'>{children}</h3>
        </div>
    )
}
