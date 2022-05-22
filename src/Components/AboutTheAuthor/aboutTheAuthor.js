import React from 'react';

import profileCircle from '../../Images/Profile/profile.jpg'
import './style.css'

const AboutTheAuthor = () => {

    const aboutAutherText1 = 'Jordan Collier currently is a product specialist helping companies and individuals turn their ideas into products globally. This knowledge which has been sought after through conventional and unconventional sources has sparked a journey working as a software engineer turned Product Team Coach (PTC). He has helped form, design, set-up, and create product labs across multiple Fortune 100 companies, some of which were in the top 5.'

    const aboutAutherText2 = 'He has also helped create internal bootcamps which train individuals how to be a product team member and PTC and began standardizing the way a business communicates products across teams and users. Jordan is passionate about this line of work and hopes this resource helps you find clarity as you seek greater understanding within this discipline.'

    return (
        <div className='about-author-container'>
            <p>
            <div className='statement-container'>
                <p className={'statement'}>{'About the'}</p>
                <p className={'statement2'}>{'Author'}</p>
                <img className='profile' src={profileCircle} />
                <h3 className={'name-text'}>Jordan Collier</h3>
            </div>



            <p className={'general-text'}>{aboutAutherText1}</p>
            <p className={'general-text'}>{aboutAutherText2}</p>
            
            </p>
        </div>
    )
}

export default AboutTheAuthor;