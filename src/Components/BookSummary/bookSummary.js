import React from 'react'
import AboutTheAuthor from '../AboutTheAuthor/aboutTheAuthor'
import ChapterGuide from '../ChapterGuide/chapterGuide'
import './style.css'

const BookSummary = (props) => {

    const firstParagraph = 'The intention, desire, and hope in writing the following pages is to assist you in breaking down your barriers to understand what creating and running a product entails.'

    const secondParagraph = 'What makes this book unique is that it is purposefully crafted not to ascribe to any one style of Agile or iterative delivery of work, but instead focuses on the outcomes of team collaboration.'

    const statement = 'enter into a clearer understanding'
    const statement2 = 'turn ideas into valuable products'

    const thirdParagraph = 'There are so many organizations, schools certifications, and companies out in the world vying for your attention and money. This in turn can cause confusion as to where to find information or even where to start the journey towards understanding what it means to actually care for a product or how even to create one. This book equips leader\'s who need a framework which delivers value informed by empowered teams to continuously adjust to business priorities, market needs/awareness/context, with scoped iterations and shared understanding.'

    const statement3 = 'a framework for any'
    
    const statement4 = ' aspiring individual in product'

    const statement5 = 'More than just a product manager or owner'
    
    const statement6 = 'become a product team coach'

    const bookLink = 'https://www.amazon.com/Meta-Knight-amiibo-Japan-Super-165993011/dp/B00PIEHUD8/ref=sr_1_5?crid=2EZFHJJIC9VTC&keywords=amiibo&qid=1652887153&sprefix=amiibo%2Caps%2C91&sr=8-5'




    return (
        <div className='bookSummary-container'>
            <p className={'general-text'}>{firstParagraph}</p>

            <div className='statement-container'>
                <p className={'statement'}>{statement}</p>
                <p className={'statement2'}>{statement2}</p>
            </div>

            <p className={'general-text'}>{secondParagraph}</p>

            <div className='statement-container'>
                <span className={'statement'}>{statement3}</span>
                <span className={'statement2'}>{statement4}</span>
            </div>

            <p className={'general-text'}>{thirdParagraph}</p>


            <AboutTheAuthor/>

            <ChapterGuide/>

            <div className='statement-container'>
                <p className={'statement'}>{statement5}</p>
                <p className={'statement2'}>{statement6}</p>
            </div>
            
            <div className='statement-container'>
                <a className='submit-button-amazon' href={bookLink} target="_blank">Buy the Book on Amazon</a>
            </div>
            
        </div>
    )
}


// Part 3 Story Theory 
// - Stories
// Part 4 Ceremonies 
// - Ceremony Setup
// - Daily Ceremonies
// - Weekly Ceremonies
export default BookSummary;