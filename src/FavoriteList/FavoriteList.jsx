import React from 'react';


export default function FavoriteList({ favorites }) {
    return (
        <div>
            <h2>Favorites</h2>
            {favorites.map((favorite, index) => (
                <img key={index} src={favorite} alt="favorite giphy" />
            ))}
        </div>
    );
}