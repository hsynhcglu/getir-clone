import React from 'react'

export default function Menu({title, items}) {
    return (
        <section>
            <nav className='grid gap-y-4'>
                <h6 className='text-lg text-primary-color dark:text-secondary-color'>{title}</h6>
                <nav>
                    <ul className='grid gap-y-3'>
                        {items.map((item, key) => 
                            <li key={key}>
                                <a href="#" className='text-sm text-gray-600 dark:text-gray-200'>
                                    {item.title}
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>
            </nav>
        </section>
    )
}
