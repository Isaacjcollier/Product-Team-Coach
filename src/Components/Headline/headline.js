import React from 'react'
import './style.css'
import exampleBookPicture from '../../Images/Book/bookexample.png'


const Headline = () => {
    return (
        <div className='headline-container'>
            <img className='headline-book' src={exampleBookPicture} />
            <div className='headline-sub-container'>
                <h1 className='headline-book-name'>Product Team Coach</h1>
                <p className='headline-subHeader'>A book by</p>
                <p className='headline-name'>Jordan Collier</p>
                </div>
        </div>
    )
}

export default Headline;