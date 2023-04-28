import React, { useState } from 'react';
import './GiphyImage.css';

export default function GiphyImage({ image, changeImage, addToFavorites }) {
  const [changeClicked, setChangeClicked] = useState(false);
  const [favoriteClicked, setFavoriteClicked] = useState(false);

  const handleButtonClick = (type) => {
    if (type === 'change') {
      setChangeClicked(true);
      changeImage();
    } else if (type === 'favorite') {
      setFavoriteClicked(true);
      addToFavorites(image);
    }
    setTimeout(() => {
      setChangeClicked(false);
      setFavoriteClicked(false);
    }, 100);
  };

  return (
    <>
      <div className="button-container">
        <button
          className={`button${changeClicked ? ' button-clicked' : ''}`}
          onClick={() => handleButtonClick('change')}
        >
          Change Image Here
        </button>
        <button
          className={`button${favoriteClicked ? ' button-clicked' : ''}`}
          onClick={() => handleButtonClick('favorite')}
        >
          Add to Favorites
        </button>
      </div>
      <br />
      <img src={image} alt="random giphy" />
    </>
  );
}
