import { useState, useEffect } from 'react';
import React from 'react'
import Title from 'ui/Title'
import Favoritesui from 'ui/Favoritesui';
import ProductsData from 'api/products.json'

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        setFavorites(ProductsData)
    },[])

    return (
        <div>
            <div className="container mx-auto">
                <Title>Favoriler</Title>
                <div className="grid grid-cols-8">
                    {favorites && favorites.map((favorites, index) => <Favoritesui key={index} favorites={favorites} />)}
                </div>
            </div>
        </div>
    )
}
