import React from 'react'

export default function GiphyImage ({image, changeImage}) {
    return(
    <> 
    <div>
    <button onClick={changeImage}>Change Image Here</button>
    </div> <br/>
    <img src={image}  />
    
    </> )
}