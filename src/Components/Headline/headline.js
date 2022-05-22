import React from 'react'
import './style.css'
import exampleBookPicture from '../../Images/Book/bookexample.png'


const Headline = () => {
    return (
        <div className='container'>
            <img className='book' src={exampleBookPicture} />
            <h1 className='headline'>Product Team Coach</h1>
            <div className='container'>
                <p className='subHeader'>A book by</p>
                <p className='name'>Jordan Collier</p>
            </div>
        </div>
    )
}

export default Headline;