import { useState, useEffect } from 'react'
import React from 'react'
import cardsData from 'api/cards.json'

export default function Cards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardsData)
    }, [])

    return (
        <div className='container mx-auto mt-20 mb-20'>
            <div className='grid grid-cols-3 gap-x-4'>
            {cards && cards.map(card => (
                <div className='flex flex-col items-center gap-y-3 drop-shadow-md p-4'>
                    <img src={card.image} />
                    <h6 className='dark:text-secondary-color text-lg font-semibold text-primary-color'>{card.title}</h6>
                    <p className='text-gray-700 text-sm dark:text-gray-200'>{card.text}</p>
                </div>
            ))}
            </div>
        </div>
    )
}
