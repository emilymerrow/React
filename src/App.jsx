import { useState, useEffect } from 'react'

import './App.css'
import Form from './Form/Form'
import GiphyImage from './GiphyImage/GiphyImage'

function App() {

  const [image, setImage] = useState('')
  const [search, setSearch] = useState('butterfly')

 async function fetchNewData() {
    const url = "https://api.giphy.com/v1/gifs/random?api_key=6m9yKGbrSvyFYTQ7NgH6diPXJkRWu2m3&tag=&rating=g"
    const data = await fetch(url)
    const json = await data.json()
    // setImage(json.data[0].images.original.url)
    setImage(json.data.images.original.url)

  }

  async function searchGif(term) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=6m9yKGbrSvyFYTQ7NgH6diPXJkRWu2m3&q=${term}&limit=1&offset=0&rating=g&lang=en`
    const data = await fetch(url)
    const json = await data.json()
    setImage(json.data[0].images.original.url)


  }
  // const [count, setCount] = useState(0)
  function changeImage() {
    fetchNewData()

  }

useEffect(() => {
  // const url = `https://api.giphy.com/v1/gifs/search?api_key=6m9yKGbrSvyFYTQ7NgH6diPXJkRWu2m3&q=${search}&limit=1&offset=0&rating=g&lang=en`

  const url = "https://api.giphy.com/v1/gifs/random?api_key=6m9yKGbrSvyFYTQ7NgH6diPXJkRWu2m3&tag=&rating=g"

  async function fetchData() { 
    const data = await fetch(url)
    const json = await data.json()
    // setImage(json.data[0].images.original.url)
    setImage(json.data.images.original.url)
  }
  fetchData()
}, [])

  
  return (
    <>
      <h1>Giphy</h1>
      <Form  searchGif={searchGif} />
      < br/>
      <GiphyImage image={image} changeImage={changeImage} />
    </>
  )
}

export default App
