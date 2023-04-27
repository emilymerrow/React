import React, {useState} from 'react'

export default function Form({searchGif}) {

    const [searchTerm, setSearchTerm] = useState('')

     function handleChange(event) {
        setSearchTerm(event.target.value)
     } 

     function handleSubmit(event) {
            event.preventDefault()
            searchGif(searchTerm)
            setSearchTerm('');
     }

    return (
    
      <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='gifTerm'>Search by</label>
            <input id="gifTerm" type="text" name='gifTerm' value={searchTerm} onChange={handleChange} />
            <button type='Submit'>Search</button>
        </form>
        </>
    )
}