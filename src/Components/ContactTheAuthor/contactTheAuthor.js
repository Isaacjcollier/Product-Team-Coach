import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './style.css'

const ContactTheAuthor = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // emailjs.sendForm('productTeamCoach-test', 'template_tp3actw', form.current, 'IQ_3h5O2aXFPvI1zM')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        
        // e.target.reset()
    };

    return (
        <div className='email-container'>
            <div className='statement-container-email'>
                <p className={'statement'}>{'Email The Author'}</p>
                <p className={'statement2'}>{'For Questions or Inquiries'}</p>
            </div>
            <form className='contactTheAuthor-form-container' ref={form} onSubmit={sendEmail}>
                <div className='name-box'>
                    <label className='name-label' >First Name</label>
                    <input className='name-input' type="text" name="name" placeholder='Preferred name'/>
                </div>
                <br/>
                <div className='name-box'>
                    <label className='name-label'>Email</label>
                    <input className='name-input' required={true} type="email" name="user_email" placeholder='you@example.com'/>
                </div>
                <br/>
                <div className='name-box'>
                    <label className='name-label'>Message</label>
                    <textarea className='message-input' name="message" placeholder='Hello Jordan, I just wanted to touch base...' />
                </div>
                <br/>
                <input className='submit-button-author' type="submit" value="Send Jordan a Message" />
            </form>
        </div>
    )
}

export default ContactTheAuthor;