import React from 'react'
import { useState } from 'react'

const Create = () => {
   

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const newShoe = async  () => {
        const shoes = {title, price, image};
    
    await fetch('http://localhost:5000/CreatePost', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        // changing the const
        body: JSON.stringify(shoes)
    }) .then((response) =>  console.log(response))
        .catch(err => console.log(err))
        console.log('new shoe added')
        
    }
  

    const handleSubmit = (e) => {
        e.preventDefault();
        // const shoes = {title,price, image};
        newShoe()
        console.log(newShoe())
    }
    return (
        <div className='create'>
            <h1> Post Shoes Here</h1>
            <form onSubmit={handleSubmit}>
                <label> Shoe Name:</label>
                <input className='name_post'
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <label> Price: </label>
                <input className='price_post'
                    type="text"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />    
        

            <label class="label" for="image"> Photo (url): </label>
            <input class="input" placeholder="Enter a photo url" id="image" name="image" type="text" 
                required
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <button type='submit' >Post </button>
            
            </form>
        </div>
    )
     
}

export default Create;