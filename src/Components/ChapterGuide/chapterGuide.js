import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './style.css'

const ChapterGuide = () => {

    const form = useRef();

    return (
        <div>
            <div className='statement-container'>
                <p className={'statement'}>{'Chapter Guide'}</p>
            </div>
            <div className={'chapter-list-container'}>
                <div className={'chapter Guide'}>
                    <h2 className='part-header'>Part I - <span className={'part-header-secondary'}>Product Team</span></h2>
                    <p className='chapter-guide-text'>Chapter 1: Product Team Coach</p>

                    <h2 className='part-header'>Part II - <span className={'part-header-secondary'}>Productization</span></h2>
                    <p className='chapter-guide-text'>Chapter 2: What is a Product?</p>
                    <p className='chapter-guide-text'>Chapter 3: Scoping</p>
                    <p className='chapter-guide-text'>Chapter 4: Discovery and Framing</p>
                    <p className='chapter-guide-text'>Chapter 5: Inception</p>

                    <h2 className='part-header'>Part III - <span className={'part-header-secondary'}>Story Theory</span></h2>
                    <p className='chapter-guide-text'>Chapter 6: Stories</p>

                    <h2 className='part-header'>Part IV - <span className={'part-header-secondary'}>Ceremonies</span></h2>
                    <p className='chapter-guide-text'>Chapter 7: Ceremony Setup</p>
                    <p className='chapter-guide-text'>Chapter 8: Daily Ceremonies</p>
                    <p className='chapter-guide-text'>Chapter 9: Weekly Ceremonies</p>

                    <h2 className='part-header'>Part V - <span className={'part-header-secondary'}>Conclusion and Further Thoughts</span></h2>

                    <h2 className='part-header'>Part VI - <span className={'part-header-secondary'}>Breaking Into the Industry</span></h2>
                </div>
            </div>
        </div>
    )
}

export default ChapterGuide;