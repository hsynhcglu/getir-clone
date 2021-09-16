import { useState, useEffect } from 'react'
import React from 'react'
import CategoryData from 'api/categories.json'
import Category from 'ui/Category';
import Title from 'ui/Title';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(CategoryData)
    }, [])

    return (
        <div className='py-4 -mt-2'>
            <div className='container mx-auto'>
                <Title>Kategoriler</Title>
                <div className='grid grid-cols-10'>
                    {categories && categories.map((category, index) => <Category key={index} category={category} />)}
                </div>
            </div>
        </div>
    )
}
